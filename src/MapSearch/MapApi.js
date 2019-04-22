import React, { Component } from 'react';
import { Input, Card, Row, Col, Avatar } from 'antd';
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

  savePoint = (e) => {
    var trigger = true;
    if (this.savedPoint.length < 1) { trigger = true; }
    else {
      trigger = false;
    }
    var index = this.props.currentindex;
    var [...newSavePoint] = this.props.savedPoint;
    if (trigger) { newSavePoint[index] = newSavePoint[index].concat(this.savedPoint); }
    else { newSavePoint[index] = this.savedPoint; }



    this.props.savePoint(newSavePoint)
    // console.log(this.savedPoint)
    //this.setState({UI:this.props.UI})

  }

  deletePoint = () => {

    // console.log("delete")
    var [...currentSavedPoint] = this.props.savedPoint;
    var index = this.props.currentindex;

    currentSavedPoint[index] = this.savedPoint;
    this.props.deletePoint(currentSavedPoint);
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
          {/* <Col >
            <button ref="addButton" type="button" onClick={this.savePoint}>Add to my plan</button>
          </Col> */}
        </Row>
        <Row >
          <Col xs={24} sm={6} md={24} lg={18} xl={18} >
            <div ref={this.map} id="map"></div>

          </Col>
          <Col xs={24} sm={6} md={24} lg={6} xl={6}>
            <div className="infoView" ref="infowindowcontent" display="none" >
              <Card
                bordered={true}
                extra={<button className="ant-btn ant-btn-primary ant-btn-lg ant-btn-background-ghost" disabled={false} ref="addButton" onClick={this.savePoint} >Add</button>}
                //Place Name
                title={<span ref="placename"></span>}
                headStyle={{ padding: "0px", fontSize: "25px", position: "sticky" }}
                bodyStyle={{ padding: "0px" }}
                size="small"
                className="cardStyle"
                //Place Image
                cover={<img ref="placeicon" alt="" src="" style={{ maxHeight: '270px' }} />}
              >

                <div className="colorDiv" >
                  <p className="h4Style" ref="placerate"></p>
                  <h5 className="h4Style" ref="placetype"> </h5>
                </div>
                <div className="div2Style" >
                  <Row className="rowStyle">
                    <Col span={4}>
                      <Avatar size="small" icon="environment" className="avatarStyle" />  </Col>
                    <Col span={20}>
                      <div ref="placeaddress"></div>
                    </Col>
                  </Row>
                  <Row className="rowStyle">
                    <Col span={4}>
                      <Avatar size="small" icon="phone" className="avatarStyle" />  </Col>
                    <Col span={20}>
                      <div ref="placetel"></div>
                    </Col>
                  </Row>
                  <Row className="rowStyle">
                    <Col span={4}>
                      <Avatar size="small" icon="calendar" className="avatarStyle" />  </Col>
                    <Col span={20}>
                      <div ref="placeopeningHour" className="openHours"></div>
                    </Col>


                  </Row>

                </div>
                <button className="ant-btn ant-btn-block" disabled={true} ref="deleteButton" > Delete from my plan </button>
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

    var clickHandler = new ClickEventHandler(map, { lat: 59.325, lng: 18.070 });

    clickHandler.infowindowContent = this.refs.infowindowcontent;
    clickHandler.infowindowContent.style.display = "none";
    clickHandler.place_icon = this.refs.placeicon;
    clickHandler.place_name = this.refs.placename;
    clickHandler.place_address = this.refs.placeaddress;
    clickHandler.place_type = this.refs.placetype;
    clickHandler.place_tel = this.refs.placetel;
    clickHandler.place_openHour = this.refs.placeopeningHour;
    clickHandler.place_rate = this.refs.placerate;


    // Create the search box and link it to the UI element.
    var input = this.searchInput.current.input;
    var searchBox = new google.maps.places.SearchBox(input);
    var addButton = this.refs.addButton;
    var deleteButton = this.refs.deleteButton;


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
    // eslint-disable-next-line no-unused-vars
    var service = new google.maps.places.PlacesService(map);
    // var geocoder = new google.maps.Geocoder();
    addButton.addEventListener('click', function (e) {
      addSeletedMarkers();
      e.preventDefault();

    });

    deleteButton.addEventListener('click', function (e) {
      e.preventDefault();
      deleteSavedPoint(currentMarker);

    })

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

      if (places.length === 0) {
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
          // console.log("Returned place contains no geometry");
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



          // thisRef.setState(clickHandler.place_rate);

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
      if (thisRef.props.savedPoint) {
        if (thisRef.props.savedPoint[thisRef.props.currentindex].find(item => item.id === marker.id)) {
          addButton.disabled = true;
          deleteButton.disabled = false;
        }
        else {
          addButton.disabled = false;
          deleteButton.disabled = true;
        }
      }
      else {
        addButton.disabled = false;
        deleteButton.disabled = true;
      }
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
      // console.log(markers[0].id);
      setCurrentMarker(markers[0]);
    }

    function addSeletedMarkers() {
      // console.log(this)
      // console.log(this.savedPoint)
      var currentSave = {
        id: currentMarker.id,
        title: clickHandler.place_name.textContent,
        address: clickHandler.place_address.textContent,
        // marker: currentMarker,

      }
      if (thisRef.props.savedPoint) {
        if (thisRef.props.savedPoint[thisRef.props.currentindex].find(item => item.id === currentSave.id)) {

        }
        else {
          thisRef.savedPoint.push(currentSave);
        }
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
        // thisRef.setState(clickHandler.place_rate);

      });

      // console.log(thisRef.savedPoint);
      currentMarker.setMap(null);
      setCurrentMarker(marker);
      addButton.disabled = true;
      deleteButton.disabled = false;

    }

    // function checkSavedPoint(marker){
    //   map.panTo(marker.position);
    //   clickHandler.getPlaceInformation(marker.id);
    // }

    function deleteSavedPoint(marker) {

      function checkPoint(element) {
        return element.id === marker.id;
      }
      if (thisRef.props.savedPoint[thisRef.props.currentindex].find(item => item.id === marker.id)) {

        var currentArray = thisRef.props.savedPoint[thisRef.props.currentindex];
        let i = currentArray.findIndex(checkPoint);
        thisRef.savedPoint.splice(i, 1);
        marker.setMap(null);
        addButton.disabled = false;
        deleteButton.disabled = true;
        // console.log(thisRef.props.savedPoint[thisRef.props.currentindex]);
      }
      // marker.setMap(null);
      // console.log("delete")
      var [...currentSavedPoint] = thisRef.props.savedPoint;
      var index = thisRef.props.currentindex;

      currentSavedPoint[index] = thisRef.savedPoint;
      thisRef.props.deletePoint(currentSavedPoint);
      // console.log(thisRef.savedPoint)

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

    },
    deletePoint: (value) => {
      const action = { type: "DELETE_POINT", payload: value };
      dispatch(action);
      // (console.log(value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapApi);
