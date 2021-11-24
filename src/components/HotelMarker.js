import { useState } from 'react'

import styled from 'styled-components'
import InfoWindow from './InfoWindow'

import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`

const HotelMarker = (props) => {
  const [showInfoWindow, setshowInfoWindow] = useState(false)
  const { listHotel, id } = props
  // const result = listHotel.find(element => console.log(element.id))
  const handleOnMouseEnter = () => {
    setshowInfoWindow(true)
  }
  const handleOnMouseOut = () => {
    setshowInfoWindow(false)
  }

  console.log(typeof listHotel._id, typeof id)
  return (
    <>
      <MarkerContainer onMouseEnter={() => handleOnMouseEnter()} onMouseOut={() => handleOnMouseOut()}>
        <FaMapMarkerAlt 
          style={{ 
            width: '40px', 
            height: '40px', 
            color: "red", 
            position: "absolute", 
            bottom: '100%', 
            left: '-20px',
            border: '1px solid black'
          }} 
        />
      </MarkerContainer>
      {showInfoWindow && <InfoWindow />}
    </>
  )
}

export default HotelMarker