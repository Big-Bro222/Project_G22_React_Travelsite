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
      this.infowindowContent = document.getElementById('infowindow-content');
      this.infowindow.setContent(this.infowindowContent);
    
      this.currentId = 0;
      this.currentMarker = {
        id: 0,
        title: 'unknow',
        address: 'unkown Places'
      };
    
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
      let pointId,pointTitle,pointAdress;
      this.placesService.getDetails({ placeId: placeId }, function (place, status) {
        if (status === 'OK') {
          pointId=place.place_id;
          pointTitle=place.name;
          pointAdress=place.formatted_address;
          me.infowindow.close();
          me.infowindow.setPosition(place.geometry.location);
          me.infowindowContent.children['place-icon'].display = 'inline';
          me.infowindowContent.children['place-icon'].src = place.icon;
          me.infowindowContent.children['place-name'].textContent = place.name;
          me.infowindowContent.children['place-id'].textContent = place.place_id;
          me.infowindowContent.children['place-address'].textContent =
            place.formatted_address;
          me.infowindow.open(me.map);
          // console.log(me.currentMarker.title);
        }
        
      });
      // this.setCurrentMarker(this.infowindowContent.children['place-id'].textContent,this.infowindowContent.children['place-name'].textContent
      // ,this.infowindowContent.children['place-address'].textContent);
      // console.log(this.currentMarker.title);
    }
  
    getCurrentId = function () {
      return this.currentId;
    }

    // setCurrentMarker = function (id,name,address){
    //   this.currentMarker.id = id;
    //   this.currentMarker.title = name;
    //   this.currentMarker.address = address;
    // }

    // getCurrentMarker = function () {
    //   console.log(this.currentMarker.title);
    //   return this.currentMarker;
    // }
  }

  export default ClickEventHandler;