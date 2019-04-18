import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import "./MapSearch.css";
import MapInfo from "./MapInfo";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import ClickEventHandler from "./ClickEventHandler"

/* global google */
class MapApi extends Component {
  state = {
  }


  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.searchInput = React.createRef();
    this.savedPoint=[];

  }

  savePoint = () => {
    var index = this.props.currentindex
    var [...newSavePoint]=this.props.savedPoint;
  

newSavePoint[index]=this.savedPoint;

 
    this.props.savePoint(newSavePoint)
    //this.setState({UI:this.props.UI})

}


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
            <button ref="addButton" type="button" onClick={this.savePoint}>Add to my plan</button>
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
    var thisRef = this;
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
    var currentMarker = {         
      id: 0,
      title: 'unknow01',
      address: 'unkown Places01' };
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
          title:place.name,
          address:place.formatted_address,
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
      // console.log(this)
      // console.log(this.savedPoint)
   var currentSave = {
    id:currentMarker.id,
    title:clickHandler.infowindowContent.children['place-name'].textContent,
    address:clickHandler.infowindowContent.children['place-address'].textContent

   }
      if(thisRef.savedPoint.find(item=>item.id===currentSave.id))
      {
      
      }
      else
      {
        thisRef.savedPoint.push(currentSave);
      }
      
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

      console.log(thisRef.savedPoint);
      
    }
  }
}

function mapStateToProps(state) {
  const { savedPoint,currentindex } = state

  return {
    savedPoint,
    currentindex
  }
}

function mapDispatchToProps(dispatch) {
  return {
      savePoint: (value) => {
          const action = { type: "SAVE_POINT", payload: value };
          dispatch(action);
         // (console.log(value))
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapApi);
