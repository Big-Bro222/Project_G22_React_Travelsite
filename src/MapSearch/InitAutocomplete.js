/* global google */



class ClickEventHandler {
  constructor(map, origin) {
    this.origin = origin;
    this.map = map;
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow({
      maxWidth: 600,
      pixelOffset: new google.maps.Size(0, -40)
    });
    this.infowindowContent = '';
    this.place_icon = '';
    this.place_name = '';
    this.place_address = '';
    this.place_type = '';
    this.place_tel ='';
    this.place_openHour = '';
    this.place_noPlace = document.getElementById("place-noPlace");
    this.place_rate = '';
    this.infowindow.setContent(this.place_noPlace);


    this.currentId = 0;


    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
  }

  handleClick = function (event) {
    // console.log('You clicked on: ' + event.latLng);
    // If the event has a placeId, use it.
    if (event.placeId) {
      // console.log('You clicked on place:' + event.placeId);
      this.infowindow.close();
      // Calling e.stop() on the event prevents the default info window from
      // showing.
      // If you call stop here when there is no placeId you will prevent some
      // other map click event handlers from receiving the event.
      event.stop();
      this.currentId = event.placeId;
      this.getPlaceInformation(event.placeId);

    } else {
      this.infowindowContent.style.display = 'none';
      // console.log(this.place_noPlace.textContent);
      this.place_noPlace.textContent = "Not a point of Interest " + event.latLng;
      this.infowindow.open(this.map);
      this.currentId = 0;
      this.infowindow.setPosition(event.latLng);
    }
  }

  getPlaceInformation = function (placeId) {
    var me = this;
    this.placesService.getDetails({ placeId: placeId }, function (place, status) {
      if (status === 'OK') {
        me.infowindow.close();
        me.infowindow.setPosition(place.geometry.location);
        me.infowindowContent.style.display = 'inline';
        me.place_icon.style.display = 'inline';
        if (place.photos == null) {
          me.place_icon.src ='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
        }else{
           me.place_icon.src = place.photos[0].getUrl();
        }
        me.place_name.textContent = place.name;
        if (place.types == null) {
          me.place_type.textContent = 'No information available';

        } else {
          me.place_type.textContent = place.types;
        }

        if (place.international_phone_number == null) {
          me.place_tel.textContent = 'No information available';
        } else {
          me.place_tel.textContent = place.international_phone_number;
        }
        // console.log(place.opening_hours);
        if (place.opening_hours == null) {
          me.place_openHour.textContent = 'No information available';
        } else {
          me.place_openHour.textContent = place.opening_hours.weekday_text;

        }

        if (place.rating === null) {
          me.place_rate.textContent = 'No information available';
        } else {
          me.place_rate.textContent = 'Rate: ' + place.rating + '/5.0';
        }
        // console.log(me.place_rate);
        // console.log(place.rating);
        // me.place_rate.value = place.rating;


        me.place_address.textContent = place.formatted_address;
      } else {
        alert(status);
      }

    });
  }

  getCurrentId = function () {
    return this.currentId;
  }

}

function initAutocomplete() {
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

    var savedMarkers = [];
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
   //style for saved marker  use as icon:goldstar
   var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 0.05,
    strokeColor: 'gold',
    strokeWeight: 14
  };

  if (thisRef.props.savedPoint[thisRef.props.currentindex].length === 1) {
    
  } else {
    thisRef.props.savedPoint[thisRef.props.currentindex].forEach(element => {
      var marker = new google.maps.Marker({
        id:element.id,
        position: element.position,
        icon:goldStar,
        map:map,
      });

      marker.addListener('click',function(e){
        setCurrentMarker(marker);
        clickHandler.getPlaceInformation(marker.id);
      });

      savedMarkers.push(marker);

    });
  }
  
   
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
      if (thisRef.props.savedPoint[thisRef.props.currentindex]) {
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
      var lat = currentMarker.position.lat();
      var lng = currentMarker.position.lng();
      var currentSave = {
        id: currentMarker.id,
        title: clickHandler.place_name.textContent,
        address: clickHandler.place_address.textContent,
        position:{"lat":lat,"lng":lng},
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
      savedMarkers.push(marker);
      setCurrentMarker(marker);
      addButton.disabled = true;
      deleteButton.disabled = false;

    }



    function deleteSavedPoint(marker) {

      function checkPoint(element) {
        return element.id === marker.id;
      }
      var [...currentSavedPoint] = thisRef.props.savedPoint;
      var index = thisRef.props.currentindex;

      if (thisRef.props.savedPoint[thisRef.props.currentindex].find(item => item.id === marker.id)) {

        var currentArray = thisRef.props.savedPoint[thisRef.props.currentindex];
        let i = currentArray.findIndex(checkPoint);
        savedMarkers.splice(i,1);
        currentSavedPoint[index].splice(i, 1);
        marker.setMap(null);
        addButton.disabled = false;
        deleteButton.disabled = true;
      }

      thisRef.props.deletePoint(currentSavedPoint);
   

    }
  }