import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const GoogleMap = () => {
  const zoomLevel = 18
  const location = {
    address: '40 St Vincent Crescent, Glasgow, G3 8LQ',
    lat: 55.864444,
    lng: -4.286667,
  }

  return (
    <MapDiv className="map">

      <GoogleMapReact
        defaultCenter={location}
        defaultZoom={zoomLevel}
      />
    
    </MapDiv>
  )
}

export default GoogleMap

const MapDiv = styled.div`
  width: 350px;
  height: 350px;
  @media screen and (max-width: 400px) {
      height: 300px;
      width: 300px;
  }
  @media screen and (max-width: 315px) {
      height: 250px;
      width: 250px;
  }
`
