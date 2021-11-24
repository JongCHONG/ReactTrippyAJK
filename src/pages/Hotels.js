import { useEffect, useState } from "react"

import styled from "styled-components"
import { useParams } from "react-router"

import ButtonPage from "../components/ButtonPage"
import HotelMap from "../components/HotelMap"
import Stars from "../components/Stars"

// import { GetHotel } from "../utils/fetchAPI"

const SectionListHotel = styled.div`
  display:flex;
`
const DivLeft = styled.div`
  width: 640px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`
const DivRight = styled.div`
  width: 700px;
  margin: 10px auto;
  padding: 10px;
`
const HotelMiniature = styled.div`
  width: 280px;
  margin: 0 10px;
`
const ImageHotelMiniature = styled.div`
  height: 210px;
  background-color: white;
  background-position: center;
  background-size: 100%;
  background-repeat: none;
`
const Buttons = styled.div`
  display: block;
`
const PriceStars = styled.div`
  display: flex;
  justify-content: space-between;
`

const Hotels = () => {
  const { city } = useParams()
  const [listHotel, setlistHotel] = useState(null)
  const [page, setPage] = useState(1)
  let numPage = []

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city ? city : "paris"}?page=${page}`)
    .then(response => response.json())
    .then(data => setlistHotel(data))
  }, [page])

  if (!listHotel) {
    return <p>Pas de Hotel</p>
  }

  for ( let i = 1; i <= listHotel.totalPages; i++) {
    numPage.push(i)
  }

  const handleOnClick = (element) => {
    setPage(element)
  }

  // console.log()
  return (
    <>
      <SectionListHotel>
        <DivLeft>
          {listHotel.results.map(element => (
                <HotelMiniature key={element._id}>  
                  <ImageHotelMiniature style={{ backgroundImage: `url('https://trippy-konexio.herokuapp.com/img/hotels/${element.tripAdvisorId}_1.jpg')`}}/>
                  <p>{element.name}</p>
                  <PriceStars>
                    <p>{element.price + "€"}</p>
                    <p>{element.stars && <Stars numStars={element.stars} />}</p>
                  </PriceStars>
                </HotelMiniature>
          ))}
          <Buttons>
            {numPage.map(element => (
              <ButtonPage numPage={element} onClick={() => handleOnClick(element)}/>
            ))}
          </Buttons>
        </DivLeft>
        <DivRight>
          <HotelMap listHotel={listHotel}/>
        </DivRight>

      </SectionListHotel>
    </>
  )
}

export default Hotels