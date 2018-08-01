let commonValues = {};
let locationTrackId = null;
let socketInstance = null;
class Common{
    setValue(key,value){
        commonValues[key] = value;
    }
    getValue(key){
        return commonValues[key]
    }
    saveSocketInstance(instance){
        socketInstance = instance;
    }
    getSocketInstance(){
        return socketInstance;
    }
    getUserLocation(gotLocation,failedToGetLocation){

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position){
                gotLocation(position.coords);
            },function(error){
                failedToGetLocation();
            });
        } else {
            failedToGetLocation();
        }
    }
    listenForLocationchange(gotNewLocation,failedToUpdateLocation){
        var options = {enableHighAccuracy: true, timeout: 1000, maximumAge: 0}
        locationTrackId = navigator.geolocation.watchPosition(gotNewLocation, failedToUpdateLocation, options);
        // if (navigator.geolocation) {
        //     setInterval(function(){
        //         navigator.geolocation.getCurrentPosition(gotNewLocation,failedToUpdateLocation);
        //     },5000)
        // } else {
        //     failedToGetLocation();
        // }
    }
    cancelLocationWatch(){
        navigator.geolocation.clearWatch(locationTrackId);
    }
}

export default Common;