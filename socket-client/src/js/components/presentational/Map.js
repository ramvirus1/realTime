import GoogleMapReact from 'google-map-react';
import React from "react";
import PropTypes from "prop-types";

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const updateMarkers = (users) =>{
    users.map(function(user){
        return  <AnyReactComponent
            lat={ user.coordinates.lat }
            lng={ user.coordinates.lng }
            text={user.name }
        /> 
    })
 };
 
 const createMapOptions =  (maps) => {
     return {
       panControl: true,
       mapTypeControl: true,
       scrollwheel: true,
       styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
     }
 };

 const MapTemplate = ({userPositions}) => {
     return (
        <div style={{ padding: 8 }}>
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact options={createMapOptions}
                    bootstrapURLKeys={{ key: 'AIzaSyAWoOv8Hha062ltk-aVcZbgw63_qAMzK2s' }}
                    defaultCenter={userPositions[userPositions.length-1].coordinates}
                    defaultZoom={5}>
                    {/* {updateMarkers(userPositions)} */}
                    <AnyReactComponent
                        lat={ 40.7473310 }
                        lng={ -73.8517440 }
                        text={'asdasdasdasdassd' } />
                </GoogleMapReact>
            </div>
        </div>
     )
 };

 MapTemplate.propTypes = {
    userPositions:PropTypes.array.isRequired
 };

 export default MapTemplate;