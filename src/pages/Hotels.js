import { useEffect, useState, useRef } from "react"

import styled from "styled-components"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
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

const Hotels = (props) => {
  const { city } = useParams();
  // console.log("city",city)
  const [listHotel, setlistHotel] = useState(null)
  const [page, setPage] = useState(1)
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
  const handleHotelClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  console.log(titleRef)
  return (
    <>
      <SectionListHotel>
        <DivLeft>
            {/* <button onClick={handleHotelClick}>test</button> */}
          <ListHotel>
            {listHotel.results.map(element => (
              <div ref={titleRef}>
                <HotelMiniature key={element._id}>  
                <Link to= {`/hotel/${element._id}`}>
                  <ImageHotelMiniature style={{ backgroundImage: `url('https://trippy-konexio.herokuapp.com/img/hotels/${element.tripAdvisorId}_1.jpg')`}}/>
                </Link>
                  <p>{element.name}</p>
                  <PriceStars>
                    <p>{element.price + "€"}</p>
                    <p>{element.stars && <Stars numStars={element.stars} />}</p>
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
          <HotelMap listHotel={listHotel} onClick={handleHotelClick}/>
        </DivRight>

      </SectionListHotel>
    </>
  )
}

export default Hotels