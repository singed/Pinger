function initialize(position) {
    var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
        center: pyrmont,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true

    };

    var image = '/Content/Images/ladybug-icon.png';
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        icon: image
});
}
google.maps.event.addDomListener(window, 'load', function () {
    var position = navigator.geolocation.getCurrentPosition(initialize);
});