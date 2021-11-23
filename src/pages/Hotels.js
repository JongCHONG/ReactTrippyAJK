import { useContext } from "react"
import { HotelContext } from "../contexts/ContextHotel"

const Hotels = () => {
  const { listHotel } = useContext(HotelContext)

  if (!listHotel) {
    return <p>Chargment...</p>
  }
  console.log(listHotel)
  return (
    <>
    Hotels
    </>
  )
}

export default Hotels