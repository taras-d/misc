
MY_APP.service('googleMapsDirectionsService', [function() {
    
    var directionsService = new google.maps.DirectionsService(),
        directionsRenderer = new google.maps.DirectionsRenderer();
    
    function showGoogleMapsDirections (config) {
        
        directionsService.route({
            origin: config.origin,
            destination: config.destination,
            travelMode: config.travelMode
        }, function(response, status) {
            
            if (status != google.maps.DirectionsStatus.OK) {
                console.log("Can't show direction: " + config.origin + " -> " + config.destination);
                return;
            }
           
            directionsRenderer.setMap(config.map);
            directionsRenderer.setDirections(response);
            
        });
        
    }
    
    function getUserGeolocation(callback) {
        
        if (!navigator.geolocation) {
            
            console.log("Geolocation is not supported");
            
            return;
        }
        
        navigator.geolocation.getCurrentPosition(function(geoposition) {
            
            var coords = geoposition.coords;
            
            callback(coords.latitude + ',' + coords.longitude);
            
        }, function(error) {
            
            console.log("Can't get user geolocation. Error - " + error.message);
            
        });
        
    }
    
    
    // Show direction on Google Maps.
    // Config:
    //     map         - map instance
    //     origin      - point A
    //     destination - point B
    //     travelMode  - google.maps.TravelMode
    // If origin omitted, origin will be user geolocation if it possible.
    // If travel mode omitted, travel mode will be DRIVING.
    var _showDirection = function(config) {
        
        if (!config) {
            return;
        }
        
        config.travelMode = config.travelMode || google.maps.TravelMode.DRIVING;
        
        if (!config.origin) {
            
            getUserGeolocation(function(coords) {
                
                config.origin = coords;
                
                showGoogleMapsDirections(config);
                
            });
            
            return;
        }
        
        showGoogleMapsDirections(config);
        
    };
    
    return {
        showDirection: _showDirection
    }
    
}]);
