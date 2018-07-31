let commonValues = {};

class Common{
    setValue(key,value){
        commonValues[key] = value;
    }
    getValue(key){
        return commonValues[key]
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
}

export default Common;