import React from 'react'
import styled from "styled-components"


const PageFooter = styled.footer`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content: center,
`
const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap : 10%;
    background-color: #ABE7E7;
    padding : 40px;
`


export default function Footer() {
    return (
        <PageFooter>
            {/* <Nav/> */}
           <LogoContainer>
                <i class="fab fa-facebook icon" style={{fontSize : "40px"}}></i>
                <i class="fab fa-instagram icon" style={{fontSize : "40px"}}></i>
                <i class="fab fa-twitter-square icon" style={{fontSize : "40px"}}></i>
           </LogoContainer>
        </PageFooter>
    )
}
