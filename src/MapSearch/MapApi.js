import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import "./MapSearch.css";
import MapInfo from "./MapInfo";
import ReactDOM from 'react-dom';

/* global google */
class MapApi extends Component {
  state = {
  }

  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.searchInput = React.createRef();

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
    this.initAutocomplete();


  }
  componentWillMount() {

  }


  render() {

    return (
      <div>
        <Row className="mapSearch">
          <Col xs={24} sm={6} md={24} lg={10} xl={10} >
            <Input ref={this.searchInput}
              id="searchInput"
              className="controls"
              size="large"
              type="text"
              addonBefore="I want to find"
              placeholder="Input keywords like 'hotel'"
            />
          </Col>
          <Col xs={24} sm={6} md={24} lg={5} xl={5} >
            <Button type="primary" htmlType="submit" size="large" icon="search" >Search</Button>
            <button ref="addButton" type="button">Add to my plan</button>
          </Col>
        </Row>
        <Row >
          <Col xs={24} sm={6} md={24} lg={18} xl={18} >
            <div ref={this.map} id="map"></div>

            <div id="infowindow-content">
              <img id="place-icon" src="" height="16" width="16" display="inline" />
              <span id="place-name" className="title"></span>
              Place ID <span id="place-id"></span>
              <span id="place-address"></span>
            </div>


          </Col>
          <Col xs={24} sm={6} md={24} lg={6} xl={6} >
            <MapInfo />
          </Col>
        </Row>
      </div>
    )
  }




  initAutocomplete() {
    var map = new google.maps.Map(this.map.current, {
      center: { lat: 59.325, lng: 18.070 },
      zoom: 12,
      mapTypeId: 'roadmap',
      // clickableIcons: false
    });
console.log(map);
    var clickHandler = new ClickEventHandler(map, { lat: 59.325, lng: 18.070 });

    // Create the search box and link it to the UI element.
    var input = this.searchInput.current.input;
    var searchBox = new google.maps.places.SearchBox(input);
    var addButton = this.refs.addButton;

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var test1 = document.getElementById("searchInput");
    var test2 = this.searchInput.current;
    var test3 = ReactDOM.findDOMNode(this.searchInput.current);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    var currentMarker = { id: 0 };
    var selectedMarkers = [];
    // var infoWindow = new google.maps.InfoWindow({
    //   content: "testing",
    //   maxWidth: 600
    // });


    //place service
    var service = new google.maps.places.PlacesService(map);
    var geocoder = new google.maps.Geocoder();
    addButton.addEventListener('click', function (e) {
      addSeletedMarkers();
      e.preventDefault();
    });

    //style for saved marker  use as icon:goldstar
    var goldStar = {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillColor: 'yellow',
      fillOpacity: 0.8,
      scale: 0.05,
      strokeColor: 'gold',
      strokeWeight: 14
    };

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

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          id: place.place_id,
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
          // openInfowindow(lastMarker);
          clickHandler.getPlaceInformation(lastMarker.id);

        });

      });

      map.fitBounds(bounds);
    });

    function toggleBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        //preMarker=marker;
      } else {
        markers.forEach(function (marker) {
          marker.setAnimation(null);
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }


    function setCurrentMarker(marker) {
      currentMarker = marker;
      currentMarker.position = marker.position;
      map.panTo(marker.getPosition());
    }

    //     //click add marker
    map.addListener('click', function (e) {
      placeMarker(e.latLng, map);
    });


    function placeMarker(latLng, map) {
      markers.forEach(function (marker) {
        marker.setMap(null);
      });
      markers = [];

      markers.push(new google.maps.Marker({
        id: clickHandler.getCurrentId(),
        map: map,
        position: latLng,
        animation: google.maps.Animation.BOUNCE,
      }));
      console.log(markers[0].id);
      setCurrentMarker(markers[0]);
    }

    function addSeletedMarkers() {
      selectedMarkers.push(currentMarker.id);
      var marker = new google.maps.Marker({
        id: currentMarker.id,
        position: currentMarker.position,
        icon: goldStar,
        map: map,
      });
      marker.addListener('click', function (event) {
        setCurrentMarker(marker);
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];
        // openInfowindow(marker);
        clickHandler.getPlaceInformation(marker.id);
      });

      console.log(selectedMarkers);
    }
  }
}

class ClickEventHandler {
  constructor(map, origin) {
    this.origin = origin;
    this.map = map;
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow({
      maxWidth: 600,
      pixelOffset: new google.maps.Size(0, -40)
    });
    this.infowindowContent = document.getElementById('infowindow-content');
    this.infowindow.setContent(this.infowindowContent);
  
    this.currentId = 0;
  
    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
  }

  handleClick = function (event) {
    this.infowindow.close();
    console.log('You clicked on: ' + event.latLng);
    // If the event has a placeId, use it.
    if (event.placeId) {
      console.log('You clicked on place:' + event.placeId);
  
      // Calling e.stop() on the event prevents the default info window from
      // showing.
      // If you call stop here when there is no placeId you will prevent some
      // other map click event handlers from receiving the event.
      event.stop();
      this.currentId = event.placeId;
      console.log(this.currentId);
      this.getPlaceInformation(event.placeId);
    } else {
      this.infowindow.setPosition(event.latLng);
      this.infowindowContent.children['place-icon'].style.display = 'none';
      this.infowindowContent.children['place-name'].textContent = '';
      this.infowindowContent.children['place-id'].textContent = '';
      this.infowindowContent.children['place-address'].textContent =
        event.latLng;
      this.infowindow.open(this.map);
      this.currentId = 0;
    }
  }

  getPlaceInformation = function (placeId) {
    var me = this;
    this.placesService.getDetails({ placeId: placeId }, function (place, status) {
      if (status === 'OK') {
        me.infowindow.close();
        me.infowindow.setPosition(place.geometry.location);
        me.infowindowContent.children['place-icon'].display = 'inline';
        me.infowindowContent.children['place-icon'].src = place.icon;
        me.infowindowContent.children['place-name'].textContent = place.name;
        me.infowindowContent.children['place-id'].textContent = place.place_id;
        me.infowindowContent.children['place-address'].textContent =
          place.formatted_address;
        me.infowindow.open(me.map);
      }
    });
  }

  getCurrentId = function () {
    return this.currentId;
  }
}

    



// initAutocompleteee() {
//   console.log(this.map)
//   console.log(document.getElementById("map"))
//   var map = new google.maps.Map(this.map.current, {
//     center: { lat: 59.325, lng: 18.070 },
//     zoom: 13,
//     mapTypeId: 'roadmap'
//   });
//   console.log(map)

//   // Create the search box and link it to the UI element.
//   // var input = this.refs.pacinput;
//   console.log("input" + this.searchInput)
//   var searchBox = new google.maps.places.SearchBox(this.searchInput.current);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.searchInput.current);
//   // var test1 = document.getElementById("searchInput");
//   // var test2 = this.searchInput.current;
//   // var test3 = React.findDOMNode(this.searchInput);
//   console.log(searchBox)


//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener('bounds_changed', function () {
//     searchBox.setBounds(map.getBounds());
//   });

//   var markers = [];
//   var currentMarker = null;
//   var selectedMarker = [];
//   var infoWindow = new google.maps.InfoWindow({
//     content: "testing",
//     maxWidth: 600
//   });

//   //place service
//   var service = new google.maps.places.PlacesService(map);
//   var geocoder = new google.maps.Geocoder();
//   // Listen for the event fired when the user selects a prediction and retrieve
//   // more details for that place.
//   searchBox.addListener('places_changed', function () {
//     var places = searchBox.getPlaces();

//     if (places.length == 0) {
//       return;
//     }

//     // Clear out the old markers.
//     markers.forEach(function (marker) {
//       marker.setMap(null);
//     });
//     markers = [];

//     // For each place, get the icon, name and location.
//     var bounds = new google.maps.LatLngBounds();
//     places.forEach(function (place) {
//       if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//       }
//       //style for saved marker  use as icon:goldstar
//       var goldStar = {
//         path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
//         fillColor: 'yellow',
//         fillOpacity: 0.8,
//         scale: 1,
//         strokeColor: 'gold',
//         strokeWeight: 14
//       };
//       // Create a marker for each place.
//       markers.push(new google.maps.Marker({
//         map: map,
//         title: place.name,
//         id: place.place_id,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: place.geometry.location
//       }));

//       if (place.geometry.viewport) {
//         // Only geocodes have viewport.
//         bounds.union(place.geometry.viewport);
//       } else {
//         bounds.extend(place.geometry.location);
//       }

//       var lastMarker = markers[markers.length - 1];
//       lastMarker.addListener('click', function (event) {
//         toggleBounce(lastMarker);
//         setCurrentMarker(lastMarker);
//         openInfowindow(lastMarker);
//         // event.preventDefault();
//       });

//     });

//     map.fitBounds(bounds);
//   });

//   function toggleBounce(marker) {
//     if (marker.getAnimation() !== null) {
//       marker.setAnimation(null);
//       //preMarker=marker;
//     } else {
//       markers.forEach(function (marker) {
//         marker.setAnimation(null);
//       });
//       marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
//   }


//   function setCurrentMarker(marker) {
//     currentMarker = marker;
//   }

//   function openInfowindow(marker) {
//     getPlaceDetail(marker);
//     infoWindow.open(map, marker);
//   }

//   function getPlaceDetail(marker) {
//     var request = {
//       placeId: marker.id,
//       fields: ['name', 'formatted_address', 'rating', 'url', 'photos']
//     };

//     service.getDetails(request, function (place, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         if (place.photos == null) {
//           console.log("no image")
//         } else {
//           place.photos[0].height = 200;
//           place.photos[0].width = 200;
//         }
//         infoWindow.setContent(
//           '<div id="iw-container">' +
//           '<div class="iw-title">' + place.name + '</div>' +
//           'Place Rating: ' + place.rating + '<br>' +

//           '<div class="iw-content">' +
//           '<img src=' + place.photos[0].getUrl() + '></img>' + '<br>' +
//           '<div class="iw-subTitle">' + 'Contacts' + '</div>' +
//           'place url: ' + place.url + '<br>' + place.formatted_address +
//           '</div>' +

//           '<div class="iw-bottom-gradient"></div>' +

//           '</div>');
//       }
//     });

//   }
//   //     //click add marker
//   map.addListener('click', function (e) {
//     placeMarkerAndPanTo(e.latLng, map);
//   });


//   function placeMarkerAndPanTo(latLng, map) {
//     markers.forEach(function (marker) {
//       marker.setMap(null);
//     });
//     markers = [];

//     markers.push(new google.maps.Marker({
//       map: map,
//       position: latLng,
//       draggable: true,
//       animation: google.maps.Animation.BOUNCE,
//     }));
//     map.panTo(latLng);
//     getMarkerPlaceId(map, markers[0]);
//   }
//   function getMarkerPlaceId(map, marker) {
//     var latlng = marker.getPosition();

//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         if (results[1]) {
//           marker.id = results[1].place_id + "<br />";
//           // console.log(marker.id);
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }

// }

// function mapStateToProps(state) {
//   const { isFetching, lastUpdated, items: posts } = state || {
//       isFetching: true,
//       items: []
//   }

//   return {
//       posts,
//       isFetching,
//       lastUpdated
//   }
// }

// export default connect(mapStateToProps)(mapView)
export default MapApi;