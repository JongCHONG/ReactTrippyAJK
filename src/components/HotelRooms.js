import styled from "styled-components"

const TitleRow = styled.div`
  width: 600px;
  padding: 5px 5px 0 5px;
  border-bottom: 1px solid gray;
  display: flex;
  margin: 10px auto 0 auto;
`
const Row = styled.div`
  width: 600px;
  padding: 0 5px ;
  display: flex;
  margin: 0 auto;
  border-bottom: 1px solid gray;
`
  const Case = styled.div`
  width: 300px;
  padding: 5px;
`

const HotelRooms = props => {
  const { hotelRooms } = props

  const sort = hotelRooms.results.sort((a, b) => a.people - b.people)

  // console.log(sort[0].people)
  return (
    <>
      <TitleRow>
        <Case>
          Pour
        </Case>
        <Case>
          Price
        </Case>
        <Case>
          Bathroom
        </Case>
      </TitleRow>
      {sort.map(element => (
        <Row>
          <Case>
            {element.people} {element.people === 1 ? "personne" : "personnes"} 
          </Case>
          <Case>
            {element.price + "€"}
          </Case>
          <Case>
            {element.isBathroom === true ? "Toilettes" : "Pas de toilettes"}
          </Case>
        </Row>
      ))}
    </>
  )
}

export default HotelRooms