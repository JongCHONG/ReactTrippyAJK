import React from 'react'
import { useEffect, useState } from 'react'

export default function CityCard() {
    const [city, setCity] = useState()

    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/home")
        .then(response => response.json())
        .then(data => setCity(data.city))
    },[])
    console.log("city: ",city);
    // if(city.length === 0) {
    //     return null
    // }
    return (
        <div>
            <h1>City card</h1>
            {/* {city.map((cities) => {
                return <div key={cities.name}>
                        <img src={cities.source} alt={cities.name} />
                        <h2>{cities.name}</h2>
                    </div>
            })} */}
        </div>
    )
}
