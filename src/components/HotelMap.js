import { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'

import HotelMarker from './HotelMarker'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const HotelMap = props => {
  const [centerLocation, setCenterLocation] = useState(null)
  const { listHotel } = props
  useEffect(() => {
    setCenterLocation({
      lat: listHotel.center.lat,
      lng: listHotel.center.lon
    })
  },[listHotel])

  // useEffect(() => {
  //   fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/paris`)
  //   .then(response => response.json())
  //   .then(data => setcenterLocation({
  //     lat: data.center.lat,
  //     lng: data.center.lon
  //   }))
  // }, [])

  // if (!centerLocation) {
  //   return <p>Chargement...</p>
  // }

  console.log(listHotel)
  return (

    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={centerLocation}
        defaultZoom={listHotel.zoom}
      >
      
      </GoogleMapReact>
    </MapContainer>
  )
  
}

export default HotelMap