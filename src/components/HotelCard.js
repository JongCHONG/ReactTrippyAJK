import React from 'react'
import styled from "styled-components"
import {useState } from 'react'
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
const HotelInfos = styled.div`
    display : flex;
    // gap : 20%;
    width : 100%;
    justify-content: space-around;
    margin : 40px 0;
    align-items : baseline;
`
const About = styled.div`
    padding-right:20px;
    padding-bottom:20px;
`
const PriceButton = styled.button`
    padding: 3px 10px;
    border-radius: 20px;
    background : blue;
`
const Commodities = styled.div`
    display : flex;
    flex-direction : column;
    height :200px;
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
            
            <HotelInfos>
                <About>
                    <h2>{props.hotelImages.name}</h2>
                    <Location><strong>Address:</strong> {props.hotelImages.address}</Location>
                    <div><strong>Phone:</strong> {props.hotelImages.phone}</div>
                    <div><strong>Email:</strong> {props.hotelImages.email}</div>
                    <div><strong>created in</strong> {props.hotelImages.created}</div>
                    <h3><strong>Price:</strong> :{props.hotelImages.price}€</h3>
                    <PriceButton>
                        <a 
                            href={props.hotelImages.website}
                            className="linkBtn"
                            target= "_blank"
                        >
                            visit us
                        </a>
                    </PriceButton>
                </About>
                <div>
                    <h1 style={{textDecoration : "underline"}}>Commodities</h1>
                    <Commodities>
                    {props.hotelImages.commodities.map((commoditie,index) => {
                        return <p key={index}>{commoditie}</p>
                    })}
                    </Commodities>
                </div>
            </HotelInfos>
        </CardContainer>
    )
}
