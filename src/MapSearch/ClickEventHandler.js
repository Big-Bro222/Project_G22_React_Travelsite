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
      this.place_icon = document.getElementById('place-icon');
      this.place_name = document.getElementById('place-name');
      this.place_address = document.getElementById('place-address');
      this.place_type = document.getElementById('place-type');
      this.place_tel = document.getElementById('place-tel');
      this.place_openHour = document.getElementById('place-openingHour');
      this.place_noPlace = document.getElementById('place-noPlace');
      // this.place_rate = document.getElementById('place-rate');
      this.infowindow.setContent(this.place_noPlace);

    
      this.currentId = 0;

    
      // Listen for clicks on the map.
      this.map.addListener('click', this.handleClick.bind(this));
    }
  
    handleClick = function (event) {
      console.log('You clicked on: ' + event.latLng);
      // If the event has a placeId, use it.
      if (event.placeId) {
        console.log('You clicked on place:' + event.placeId);
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
        this.place_noPlace.textContent = "Not a point of Interest " + "\n"+ event.latLng;
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
          me.place_icon.src = place.photos[0].getUrl();
          me.place_name.textContent = place.name;
          me.place_type.textContent = place.types;
          me.place_tel.textContent = place.international_phone_number;
          me.place_openHour.textContent = place.opening_hours.weekday_text;
          // if (place.rating === null) {
          //   me.place_rate.value = 0;
          // }else{
          //   me.place_rate.value = place.rating;
          // }
          // console.log(me.place_rate);
          // console.log(place.rating);
          // me.place_rate.value = place.rating;
          
          
          me.place_address.textContent = place.formatted_address;
        }
        
      });
    }
  
    getCurrentId = function () {
      return this.currentId;
    }

  }

  export default ClickEventHandler;