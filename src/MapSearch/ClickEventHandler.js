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
    // If the event has a placeId, use it.
    if (event.placeId) {
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

export default ClickEventHandler;