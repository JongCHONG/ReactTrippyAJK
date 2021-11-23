import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
const CityContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    width: 100%;
`
const ImageContainer = styled.div`
    width : 300px;
    margin-left : 20px;
`
const Image = styled.img`
    width : 100%;
    height: 400px;
`

export default function CityCard() {
    const [city, setCity] = useState()

    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/home")
        .then(response => response.json())
        .then(data => setCity(data.cities))
    },[])
    console.log("city: ",city);
    if(!city) {
        return null
    }
    return (
        <CityContainer>
            <h1>City card</h1>
            {city.map((cities) => {
                return <ImageContainer 
                            key={cities.name}
                            className={`cities_element ${cities.name === "Paris"? "paris_element" : ""}`}>
                            <Image src={`https://trippy-konexio.herokuapp.com/${cities.source}`}
                                alt={cities.name} 
                                className={`city`}
                            >
                            </Image>
                        <h2>{cities.name}</h2>
                    </ImageContainer>
            })}
        </CityContainer>
    )
}
