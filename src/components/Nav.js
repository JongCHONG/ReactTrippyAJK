import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
const ContainerNav =  styled.div`
  overflow: hidden;
`
const NavbarUl = styled.ul`
  display: flex;
  margin-right : 50px;
    @media (max-width: 810px) {
      position : absolute;
      width : 100%;
      height : 100vh;
      top : -18px;
      // right : -50px;
      z-index : 3;
      background : rgba(0,0,0,0.7);
      color : #ffff;
      flex-direction : column;
      justify-content: center;
      padding-top : 30px;
      transition : all ease 0.8s;
      right : ${(props) => props.print ? "-200px" : "-50px"};
    }
  `
const NavBarLi = styled.li`
  list-style: none;  
  margin: 0px 15px;
  font-size : 25px;
  font-weight : bold;
  // &:hover{
  //   font-size : 25.5px;
  // }
    @media (max-width: 810px) {
      font-size : 40px;
      display :flex;
      justify-content: center;
    }
`
const LogoBars = styled.i`
    :before {
      display : none;
    }
  @media (max-width: 810px) {
    font-size : 40px;
    cursor : pointer;
    display : block;
  }
`
const LogoTimes = styled.i`
  color : red;
  cursor : pointer;
  font-size : 40px;
  position : absolute;
  top : 20px;
  right : 20px;  
`

const Nav = () => {
  const [printNavBar, setPrintNavBar] = useState(false)

  const onclickLogoBars = () => {
    setPrintNavBar(true)
  }
  const onclickLogoTimes = () => {
    setPrintNavBar(false)
  }
  return (
    <ContainerNav>
      <NavbarUl print = {printNavBar}>
        {printNavBar && 
          <LogoTimes 
            className="fas fa-times"
            onClick = {onclickLogoTimes}
          >
          </LogoTimes>
        }
        <NavBarLi>
          <Link to="/" style={{color: printNavBar ? "#fff" : "black"}}>
            Home
          </Link>     
        </NavBarLi>
        <NavBarLi>
          <Link to="/hotels/paris" style={{color: printNavBar ? "#fff" : "black"}}>
            Hotels
          </Link>
        </NavBarLi>
        <NavBarLi>
          <Link to="/favoris" style={{color: printNavBar ? "#fff" : "black"}}>
            Favoris
          </Link>
        </NavBarLi>
      </NavbarUl>
      {!printNavBar &&
        <LogoBars
          className="fas fa-bars"
          onClick= {onclickLogoBars}
        >
        </LogoBars>
      }
    </ContainerNav>
  )
}

export default Nav