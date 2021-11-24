import { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const HotelMap = () => {
  const [location, setLocation] = useState(null)

  useEffect(() => { // => componentDidMount
    navigator.geolocation.getCurrentPosition (
      location => {
        console.log(location.coods)
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      }
    )
  }, [])
  if (!location) {
    return <p>Chargement...</p>
  }
  console.log(location);
  return (

    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={14}
      >

      </GoogleMapReact>
    </MapContainer>
  )
  
}

export default HotelMap