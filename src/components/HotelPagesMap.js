import React from 'react'

import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
// import HotelMarker from './HotelMarker'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 60vh;
  width: 40%;
`

export default function HotelPagesMap(props) {
    const [centerLocation, setCenterLocation] = useState(null)
    const {hotelElement} = props
    useEffect(() => {
        setCenterLocation({
            lat: hotelElement.location.lat,
            lng: hotelElement.location.lon
        })
    },[])
            if(!hotelElement){
                return <h1>error, there is no pictures</h1>
            }
            console.log("map",hotelElement.location);

    return (
        <div>
            <h1>lat : {hotelElement.location.lat}</h1>
            <h1>lon : {hotelElement.location.lon}</h1>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={centerLocation}
                    defaultZoom={12}
                >
                </GoogleMapReact>
            </MapContainer>
        </div>
    )
}
