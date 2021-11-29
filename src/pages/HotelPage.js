import HotelCard from "../components/HotelCard"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HotelPagesMap from "../components/HotelPagesMap";
import styled from "styled-components";

const Container = styled.div`
  
`
const HotelPage = () => {
  const { id } = useParams();
  const [hotelElement, setHotelElement] = useState()
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        .then(response => response.json())
        .then(data => setHotelElement(data.result))
    },[id])
    // console.log("hotel",hotelElement);
    if(!hotelElement){
      return <h1>error, there is no pictures</h1>
  }
  return (
    <Container>
      <HotelCard hotelImages = {hotelElement}/>
      <HotelPagesMap hotelElement = {hotelElement.location}/>
    </Container>
  )
}

export default HotelPage