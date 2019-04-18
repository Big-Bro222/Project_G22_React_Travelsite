import React, { Component } from 'react';
import { Input, Card, Row, Col,Button,Avatar } from 'antd';
import "./MapSearch.css";
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
    this.savedPoint = [];

  }

  savePoint = () => {
    var trigger = true;
    console.log(this.savedPoint.length)
    if (this.savedPoint.length <= 1) { trigger = true; }
    else {
      trigger = false;
    }
    var index = this.props.currentindex
    var [...newSavePoint] = this.props.savedPoint;

    if (trigger) { newSavePoint[index] = newSavePoint[index].concat(this.savedPoint); }
    else { newSavePoint[index] = this.savedPoint; }


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
        <Row>
          <Col xs={24} sm={6} md={24} lg={10} xl={10} >
            <Input ref={this.searchInput}
              id="pac-input"
              className="controls"
              size="large"
              type="text"
              placeholder='Try to search "attractions"'
            />
          </Col>
          <Col >
            <button ref="addButton" type="button" onClick={this.savePoint}>Add to my plan</button>
          </Col>
        </Row>
        <Row >
          <Col xs={24} sm={6} md={24} lg={18} xl={18} >
            <div ref={this.map} id="map"></div>
            {/* <div id="infowindow-content">
              < img id="place-icon" src="" height="16" width="16" display="inline" />
              <span id="place-name" className="title"></span>
              Place ID <span id="place-id"></span>
              <span id="place-address"></span>
            </div> */}

          </Col>
          <Col xs={24} sm={6} md={24} lg={6} xl={6}>
          <div className="infoView" ref="infowindowcontent" display ="none" >
                        <Card
                            bordered = {false}
                            extra={<Button type="primary">Add</Button>}
                            //Place Name
                            title={<span ref="placename"></span>}
                            headStyle={{ padding: "0px", fontSize: "25px", position:"sticky"}}
                            bodyStyle={{ padding: "0px" }}
                            size="small"
                            className="cardStyle"
                            //Place Image
                            cover={<img ref="placeicon" src="" />}
                        >

                            <div className="colorDiv" >
                                <h5 className="h4Style" ref = "placetype"> </h5>
                                {/* <Rate id= "place-rate" disabled allowHalf value={3.5} /> */}
                            </div>
                            <div className="div2Style" >
                            <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="environment" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div ref="placeaddress"></div>
                                </Col>
                                </Row>
                                <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="phone" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div ref="placetel"></div>
                                </Col>
                                </Row>
                                <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="schedule" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div ref="placeopeningHour"></div>
                                </Col>
                               
                                
                            </Row>
                               
                            </div>
                            

                        </Card>

            </div>
          </Col>
        </Row>
        <span id="place-noPlace"></span>
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
    
    clickHandler.infowindowContent = this.refs.infowindowcontent;
    clickHandler.infowindowContent.style.display ="none";
    clickHandler.place_icon = this.refs.placeicon;
    clickHandler.place_name = this.refs.placename;
    clickHandler.place_address = this.refs.placeaddress;
    clickHandler.place_type = this.refs.placetype;
    clickHandler.place_tel = this.refs.placetel;
    clickHandler.place_openHour = this.refs.placeopeningHour;
    clickHandler.place_noPlace = this.refs.placenoPlace;

    // Create the search box and link it to the UI element.
    var input = this.searchInput.current.input;
    var searchBox = new google.maps.places.SearchBox(input);
    var addButton = this.refs.addButton;

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    var currentMarker = {
      id: 0,
      title: 'unknow01',
      address: 'unkown Places01'
    };
    // var infoWindow = new google.maps.InfoWindow({
    //   content: "testing",
    //   maxWidth: 600
    // });


    //place service
    var service = new google.maps.places.PlacesService(map);
    // var geocoder = new google.maps.Geocoder();
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
          title: place.name,
          address: place.formatted_address,
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
        id: currentMarker.id,
        title: clickHandler.place_name.textContent,
        address: clickHandler.place_address.textContent

      }
      if (thisRef.props.savedPoint[thisRef.props.currentindex].find(item => item.id === currentSave.id)) {

      }
      else {
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
  const { savedPoint, currentindex } = state

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
