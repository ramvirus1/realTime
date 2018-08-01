import GoogleMapReact from 'google-map-react';
import React from "react";
import PropTypes from "prop-types";

const MapTemplate = ({userPositions}) => {
     return (
        <div style={{ padding: 8 }}>
            <div style={{ height: '80vh', width: '100%' }}>
                <div style={{height: '100%'}} id="map"></div>
            </div>
        </div>
     )
};

MapTemplate.propTypes = {
 userPositions:PropTypes.array.isRequired
};

export default MapTemplate;