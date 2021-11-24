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

  console.log(listHotel)
  return (

    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={centerLocation}
        defaultZoom={listHotel.zoom}
      >
      {listHotel.results.map((element, index) => 
        <HotelMarker 
        key={element._id} 
        lat={element.location.lat} 
        lng={element.location.lon} 
        listHotel={element}
        id={element._id}
        />
      )}
      </GoogleMapReact>
    </MapContainer>
  )
  
}

export default HotelMap