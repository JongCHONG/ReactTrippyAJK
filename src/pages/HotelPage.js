import HotelCard from "../components/HotelCard"
import HotelRooms from "../components/HotelRooms"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const HotelPage = () => {
  const { id } = useParams();
  const [hotelImages, setHotelImages] = useState()
  const [hotelRooms, sethotelRooms] = useState()

  useEffect(() => {
      fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
      .then(response => response.json())
      .then(data => setHotelImages(data.result))
  },[id])
  useEffect(() => {
      fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
      .then(response => response.json())
      .then(data => sethotelRooms(data))
  },[id])

  console.log("hotel/page/rooms",hotelRooms);
  return (
    <>
    HotelPage
    <HotelCard hotelImages = {hotelImages}/>  
    </>
  )
}

export default HotelPage