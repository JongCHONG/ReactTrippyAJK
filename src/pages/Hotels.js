import { useEffect, useState } from "react"

import styled from "styled-components"

import ButtonPage from "../components/ButtonPage"
import { useParams } from "react-router-dom";

// import { GetHotel } from "../utils/fetchAPI"


const DivLeft = styled.div`
  width: 600px;
  margin: 10px 0;
  padding: 10px;
`
const HotelMiniature = styled.div`
  width: 280px;
  float: left;
  margin: 0 10px;
`
const ImageHotelMiniature = styled.div`
  height: 210px;
  background-color: white;
  background-position: center;
  background-size: 100%;
  background-repeat: none;
`

const Hotels = (props) => {
  const { city } = useParams();
  // console.log("city",city)
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

  
  return (
      <DivLeft>
        {listHotel.results.map(element => (
              <HotelMiniature key={element._id}>  
                <ImageHotelMiniature style={{ backgroundImage: `url('https://trippy-konexio.herokuapp.com/img/hotels/${element.tripAdvisorId}_1.jpg')`}}/>
                <p>{element.name}</p>
                <p>{element.price + "€"}
                {element.stars}
                </p>
              </HotelMiniature>
        ))}
        {numPage.map((element,index) => (
          <ButtonPage 
            numPage={element} 
            onClick={() => handleOnClick(element)}
            key={index}
          />
        ))}
        

      </DivLeft>
  )
}

export default Hotels