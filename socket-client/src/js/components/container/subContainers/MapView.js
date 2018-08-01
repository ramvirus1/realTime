import React from 'react';
import {connect} from 'react-redux';
import Actions from '../../../configuration/Actions';
import MapTemplate from '../../presentational/Map';
import Common from '../../../configuration/Common';

let mapInstance = null,positionMarkers={};
var numDeltas = 100, delay = 10, i = 0, deltaLat, deltaLng;

function moveMarker(markerToMove){
    var lat = markerToMove.getPosition().lat() + deltaLat;
    var lng = markerToMove.getPosition().lng() + deltaLng;
    markerToMove.setPosition(new google.maps.LatLng({lat:lat,lng:lng}));
}

function addMarkerTransitionEffect(marker,toCoords){
    i = 0;
    deltaLat = (marker.getPosition().lat() - toCoords.lat)/numDeltas;
    deltaLng = (marker.getPosition().lng() - toCoords.lng)/numDeltas;
    if(i!=numDeltas){
        i++;
        setTimeout(moveMarker(marker), delay);
    }
}

class MapView extends React.Component{
    constructor(){
      super();
      this.CommonInstance = new Common();
      this.CommonInstance.getSocketInstance();
      this.OnlocationSuccess = this.OnlocationSuccess.bind(this);
      this.OnlocationFailed = this.OnlocationFailed.bind(this);
      this.onLocationUpdates = this.onLocationUpdates.bind(this);
    };
    OnlocationSuccess(position){
        this.CommonInstance.getSocketInstance().sendLocationUpdates(
            this.CommonInstance.getValue('currentUser'),
            position.coords
        );
    }
    OnlocationFailed(error){
      console.log('failed');
    }
    onLocationUpdates(userPositions){
       this.props.updateLocations(userPositions);
        this.props.userPositions.map(function(position){
            if(positionMarkers.hasOwnProperty(position.Id)){
                addMarkerTransitionEffect(
                    positionMarkers[position.Id],
                    position.coordinates);
            }else{
                let marker = new google.maps.Marker({
                    position: position.coordinates, 
                    map: mapInstance,
                    icon: 'src/assets/images/mapflag.svg'
                });
                marker.set('Id',position.Id);
                positionMarkers[position.Id] = marker;
            }
            
        })
    }
    componentDidMount(){
        mapInstance = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: -28.643387, lng: 153.612224},
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            fullscreenControl: true
        });
        this.CommonInstance.listenForLocationchange(this.OnlocationSuccess,this.OnlocationFailed);
        this.CommonInstance.getSocketInstance().client.on('locationUpdates',this.onLocationUpdates);
    }
    render(){
        return(
            <MapTemplate 
                userPositions={this.props.userPositions}/>
        )
    };
}
const mapStateToProps = (state) => {
    return({
        userPositions:state.MapReducer.userPositions
    })
};
const mapDispatchToProps = (dispatch) => {
    return({
        updateLocations(locations){
            dispatch({type:Actions.Map.UPDATE_ALL_POSTIONS,
                payload:{
                    locations:locations
                }
            })
        }
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(MapView);

