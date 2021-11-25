import React from 'react'
import styled from "styled-components"
import { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const CardContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
const Slider = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`
const Image = styled.img`
    border-radius: 20px;
    transition : 20s;
`
const Location = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`
const Commodities = styled.div`
    display : flex;
    flex-direction : column;
    height : 300px;
    width: 400px;
    overflow-y: scroll;
`
export default function HotelCard(props) {

    const [imageindex, setImageindex] = useState(0)
    
    const arrowDirectionClick =(arrowDirection) => {
        const index = arrowDirection === "arrowRight"? 1 : -1;
        if(imageindex >0){
            setImageindex(imageindex + index)
        }else {
            setImageindex(1000)
        }
    }
    // console.log("hotelImages",props.hotelImages.pictures);
    if(!props.hotelImages){
        return <h1>error, there is no pictures</h1>
    }
    return (
        
        <CardContainer>
            <Location>
                <h1><strong>Country : {props.hotelImages.country}</strong></h1>
                <h1>City : {props.hotelImages.city}</h1>
            </Location>
            <Slider>
                <div>
                    <AiOutlineArrowLeft 
                        style={{fontSize : "34px"}}
                        onClick={() => arrowDirectionClick("arrowLeft")}
                    />
                </div>
                <Image src={`https://picsum.photos/id/${imageindex}/600/500`}/>
                <div>
                    <AiOutlineArrowRight 
                        style={{fontSize : "34px"}}
                        onClick={() => arrowDirectionClick("arrowRight")}
                    />
                </div>
            </Slider>
            <h1>Commodities</h1>
            <Commodities>
                {props.hotelImages.commodities.map((commoditie) => {
                    return <p>{commoditie}</p>
                })}
            </Commodities>
        </CardContainer>
    )
}
