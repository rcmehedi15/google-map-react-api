import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 22.763460259994904,
  lng:  90.33942403517531
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBtBR-isanIGaB7n_BPv6PI_sm2-gfWzaE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)