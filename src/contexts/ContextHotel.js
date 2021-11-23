import { createContext, useState, useEffect } from 'react'

const HotelContext= createContext({})

const HotelContextProvider = props => {
  const [listHotel, setlistHotel] = useState(null)
  
  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/`)
    .then(response => response.json)
    .then(data => setlistHotel(data))
  },[])

  const value = {
    listHotel,
    setlistHotel
  }

  return (
    <HotelContext.Provider value={value}>
      {props.children}
    </HotelContext.Provider>
  )
}

export {
  HotelContextProvider,
  HotelContext
}