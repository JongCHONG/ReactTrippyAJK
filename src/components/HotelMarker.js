import { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'
import InfoWindow from './InfoWindow'

// import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`
const MarkerPrice = styled.div`
  height: 20px;
  background-color: white;
  border: 1px solid green;
  padding: 3px 0 0 7px;
`

const HotelMarker = (props) => {
  const [showInfoWindow, setshowInfoWindow] = useState(false)
  const { listHotel, selectedHotel } = props
  const ref = useRef()

  // const result = listHotel.find(element => console.log(element.id))
  const handleOnMouseEnter = () => {
    setshowInfoWindow(true)
  }
  const handleOnMouseOut = () => {
    setshowInfoWindow(false)
  }

  useEffect(() => {
    if (listHotel._id === selectedHotel) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedHotel])

  // console.log(listHotel)
  return (
    <>
      <MarkerContainer>
        <MarkerPrice ref={ref} onClick={() => props.handleHotelClick(listHotel._id)} onMouseEnter={() => handleOnMouseEnter()} onMouseOut={() => handleOnMouseOut()}>
          {listHotel.price + "€"}
        </MarkerPrice>
      </MarkerContainer>
      {showInfoWindow && <InfoWindow hotelName={listHotel.name}/>}
    </>
  )
}

export default HotelMarker