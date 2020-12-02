import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapDiv = styled.div`
  width: 350px;
  height: 350px;
`

// <LocationPin
//   lat={location.lat}
//   lng={location.lng}
//   text={location.address}
// />

const location = {
  address: 'Glasgow Caledonian University, Cowcaddens Rd, Glasgow G4 0BA',
  lat: 55.866111,
  lng: -4.250556,
}

const zoomLevel = 16

const GoogleMap = () => (
  <MapDiv className="map">

    <GoogleMapReact
      // bootstrapURLKeys={{ key: '' }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
      pin
    />

  </MapDiv>
)

export default GoogleMap
