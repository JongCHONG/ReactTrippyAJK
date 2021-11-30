import { useEffect, useState } from "react"

import HotelRef from '../components/HotelRef'
import styled from "styled-components"
import { useParams } from "react-router"
import ButtonPage from "../components/ButtonPage"
import HotelMap from "../components/HotelMap"

const SectionListHotel = styled.div`
  display:flex;
    @media (max-width: 970px) {
      flex-direction : column;
      gap : 40px;
    }
`
const DivLeft = styled.div`
  width: 46%;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items : center;
    @media (max-width: 970px) {
      width: 70%;
    }
`
const ListHotel = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  justify-content : center;
  scrollbar-width: thin;
    @media (max-width: 970px) {
      width: 100%;
      flex-direction : row;
      overflow: auto;
      flex-wrap: nowrap;
      height: 60vh;
      align-items:end;
      gap : 20px;
    }
`
const DivRight = styled.div`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
    @media (max-width: 970px) {
      width: 100%;
    }
`

const Buttons = styled.div`
  display: block;
`

const Hotels = (props) => {
  const { city } = useParams();
  const [listHotel, setlistHotel] = useState(null)
  const [page, setPage] = useState(1)
  const [selectedHotel, setSelectedHotel] = useState(null)
  let numPage = [];
  let indexArray = [] 
  const [favorisId, setFavorisId] = useState([])

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city ? city : "paris"}?page=${page}`)
    .then(response => response.json())
    .then(data => setlistHotel(data))
  }, [page, city])

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
    setSelectedHotel(ClickHotel_id)
  }

  // console.log(listHotel)
  const onclickLogo = (index) => {
    if(favorisId.includes(index)) {
      onclickRemove(index)
    }else {
      if(localStorage.getItem("indexs")){
        indexArray = JSON.parse(localStorage.getItem("indexs"))
        indexArray.push(index)
      } else {
        indexArray.push(index)
      }
      localStorage.setItem("indexs",JSON.stringify(indexArray)) 
      setFavorisId(indexArray)
    }
    
  }
  const onclickRemove = (id) => {
    if(localStorage.getItem("indexs")){
        indexArray = JSON.parse(localStorage.getItem("indexs"))
        const index = indexArray.findIndex(element => {
            return element === id
        })
        indexArray.splice(index,1)
     }
      localStorage.setItem("indexs",JSON.stringify(indexArray))
      setFavorisId(indexArray)
  }
  console.log("favoris",favorisId);
  return (
    <>
      <SectionListHotel>
        <DivLeft>
          <ListHotel>
            {listHotel.results.map((element, index) => (
              <HotelRef favorisId={favorisId} selectedHotel={selectedHotel} element={element} index={index} onclickLogo={onclickLogo}/>
            ))}
          </ListHotel>
          <Buttons> 
            {numPage.map(element => (
              <ButtonPage key={element} numPage={element} onClick={() => handleOnClick(element)}/>
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