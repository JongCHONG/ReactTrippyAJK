import HotelCard from "../components/HotelCard"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const HotelPage = () => {
  const { id } = useParams();
  const [hotelImages, setHotelImages] = useState()
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        .then(response => response.json())
        .then(data => setHotelImages(data.result))
    },[id])
    console.log("hotel",hotelImages);
  return (
    <>
    HotelPage
    <HotelCard hotelImages = {hotelImages}/>
    </>
  )
}

export default HotelPage