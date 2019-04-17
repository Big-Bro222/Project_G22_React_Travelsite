import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import "./MapSearch.css";
import MapInfo from "./MapInfo"

/* global google */
class MapApi extends Component {
    state = {
    }
    // getGoogleMaps() {
    //     if (!this.googleMapsPromise) {
    //       this.googleMapsPromise = new Promise((resolve) => {
    //         window.resolveGoogleMapsPromise = () => {
    //         resolve(google);
    //         delete window.resolveGoogleMapsPromise;
    //         };
    //       const script = document.getElementById("mapApi");
           
    //        if (!script) {
    //         const script = document.createElement("script");  
    //         script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA40IKC5vzBQA1HUNW1Y1OnfMQZZZ8gbpA&libraries=places&callback=initAutocomplete`;
    //         script.async = true;
    //         script.defer = true;
    //         script.id = "mapApi";
    //         document.body.appendChild(script);
    //        }
    //       });
    //     }
    //     return this.googleMapsPromise;
    //   }

      componentDidMount() {
      
      

      }
      componentWillMount(){
        this.initAutocomplete();
      }
    
      
    render() {
        
        return (
            <div>
                <Row className="mapSearch">
                    <Col xs={24} sm={6} md={24} lg={10} xl={10} >
                    <Input ref="searchInput" 
                           className="controls" 
                           size="large"
                           type="text" 
                           addonBefore="I want to find"  
                           placeholder="Input keywords like 'hotel'" 
                    />
                    </Col>
                    <Col xs={24} sm={6} md={24} lg={5} xl={5} >
                    <Button type="primary" htmlType="submit" size="large" icon="search" >Search</Button>
                    </Col>
                </Row>
                <Row >
                    <Col xs={24} sm={6} md={24} lg={18} xl={18} >
                       <div ref="map"></div>
                    </Col>
                    <Col xs={24} sm={6} md={24} lg={6} xl={6} >
                       <MapInfo/>
                    </Col>
                </Row>
            </div>
        )
    }

     initAutocomplete() {
       console.log(this.refs.map+"aaaaa")
      var map = new google.maps.Map(this.refs.map, {
        center: { lat: 59.325, lng: 18.070 },
        zoom: 13,
        mapTypeId: 'roadmap'
      });
      console.log(map)

      // Create the search box and link it to the UI element.
      // var input = this.refs.pacinput;
      console.log("input"+this.refs.searchInput.Object)
      var searchBox = new google.maps.places.SearchBox(this.refs.searchInput);
      console.log("searchbox"+searchBox)
      

      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      var currentMarker = null;
      var selectedMarker = [];
      var infoWindow = new google.maps.InfoWindow({
          content: "testing",
          maxWidth: 600
        });

        //place service
        var service = new google.maps.places.PlacesService(map);
        var geocoder = new google.maps.Geocoder();
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          //style for saved marker  use as icon:goldstar
          var goldStar = {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
            fillColor: 'yellow',
            fillOpacity: 0.8,
            scale: 1,
            strokeColor: 'gold',
            strokeWeight: 14
          };
          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            title: place.name,
            id: place.place_id,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }

          var lastMarker = markers[markers.length - 1];
          lastMarker.addListener('click', function (event) {
            toggleBounce(lastMarker);
            setCurrentMarker(lastMarker);
            openInfowindow(lastMarker);
            // event.preventDefault();
          });

        });

        map.fitBounds(bounds);
      });

      function toggleBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        //preMarker=marker;
      } else {
        markers.forEach(function(marker){
          marker.setAnimation(null);
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }


    function setCurrentMarker(marker){
      currentMarker = marker;
    }

    function openInfowindow(marker){
      getPlaceDetail(marker);
      infoWindow.open(map,marker);
    }

    function getPlaceDetail(marker){
      var request = {
        placeId: marker.id,
        fields: ['name', 'formatted_address','rating','url','photos']
      };

      service.getDetails(request, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place.photos == null) {
              console.log("no image")
            }else{
            place.photos[0].height = 200;
            place.photos[0].width = 200;}
              infoWindow.setContent(
                '<div id="iw-container">' + 
                  '<div class="iw-title">'+place.name + '</div>'+
                  'Place Rating: ' + place.rating + '<br>'+

                  '<div class="iw-content">'+
                    '<img src='+place.photos[0].getUrl()+'></img>'+'<br>'+
                    '<div class="iw-subTitle">'+ 'Contacts' + '</div>' +
                    'place url: ' +place.url +'<br>' +place.formatted_address + 
                  '</div>'+

                  '<div class="iw-bottom-gradient"></div>'+
                
                '</div>');
          }
        });

    }
//     //click add marker
    map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });


function placeMarkerAndPanTo(latLng, map) {
  markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

  markers.push(new google.maps.Marker({
  map: map,
          position: latLng,
          draggable: true,
            animation: google.maps.Animation.BOUNCE,
        }));
        map.panTo(latLng);
        getMarkerPlaceId(map, markers[0]);
      }
  function getMarkerPlaceId(map, marker) {
        var latlng = marker.getPosition();

        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              marker.id = results[1].place_id + "<br />";
              // console.log(marker.id);
            }
          } else {
            alert("Geocoder failed due to: " + status);
          }
        });
      }

    }
}

export default MapApi;