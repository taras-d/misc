
MY_APP.service('googleMapsGeocoderService', [function() {
    
    var geocoder = new google.maps.Geocoder();
    
    var _getCoords = function(address, callback) {
        
        geocoder.geocode({ 
            address: address 
        }, function(results, status) {
            
            if (status == google.maps.GeocoderStatus.OK) {
                var coords = results[0].geometry.location;
                callback(true, {
                    latitude: coords.lat(),
                    longitude: coords.lng()
                });
            } else {
                callback(false, null);
            }
            
        });
        
    };
    
    return {
        getCoords: _getCoords
    }
    
}]);