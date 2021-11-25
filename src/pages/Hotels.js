import { useEffect, useState, useRef } from "react"

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
  flex-direction: column;
  flex-wrap: wrap;
`
const ListHotel = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  height: 1020px;
  scrollbar-width: thin;
`
const DivRight = styled.div`
  width: 700px;
  margin: 10px auto;
  padding: 10px;
`
const HotelMiniature = styled.div`
  width: 270px;
  margin: 0 10px;
`
const ImageHotelMiniature = styled.div`
  height: 200px;
  background-color: white;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
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
  const [selectedHotel, setselectedHotel] = useState(null)
  const titleRef = useRef()
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
  const handleHotelClick = ClickHotel_id => {
    setselectedHotel(ClickHotel_id)
  }

  // useEffect(() => {
  //   if (selectedHotel) {
  //     titleRef.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [selectedHotel])

  console.log(selectedHotel)
  return (
    <>
      <SectionListHotel>
        <DivLeft>
            {/* <button onClick={handleHotelClick}>test</button> */}
          <ListHotel>
            {listHotel.results.map(element => (
              <div ref={titleRef}>
                <HotelMiniature key={element._id}>  
                  <ImageHotelMiniature style={{ backgroundImage: `url('https://trippy-konexio.herokuapp.com/img/hotels/${element.tripAdvisorId}_1.jpg')`}}/>
                  <p>{element.name}</p>
                  <PriceStars>
                    <p>{element.price + "€"}</p>
                    <p>{<Stars numStars={element.stars} />}</p>
                  </PriceStars>
                </HotelMiniature>
              </div>
            ))}
          </ListHotel>
          <Buttons>
            {numPage.map(element => (
              <ButtonPage numPage={element} onClick={() => handleOnClick(element)}/>
            ))}
          </Buttons>
        </DivLeft>
        <DivRight>
          <HotelMap listHotel={listHotel} handleHotelClick={handleHotelClick}/>
        </DivRight>

      </SectionListHotel>
    </>
  )
}

export default Hotels