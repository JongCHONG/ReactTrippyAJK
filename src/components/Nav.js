import { Link } from "react-router-dom"
import styled from "styled-components"

const NavbarUl = styled.ul`
  display: flex;
  margin-right : 50px;
`
const NavBarLi = styled.li`
  list-style: none;  
  margin: 0px 15px;
  font-size : 25px;
  font-weight : bold;
  // &:hover{
  //   font-size : 25.5px;
  // }
`

const Nav = () => {
  return (
    <>
      <NavbarUl>
        <NavBarLi>
          <Link to="/" style={{color: "black", textDecoration: "none"}}>
            Home
          </Link>     
        </NavBarLi>
        <NavBarLi>
          <Link to="/hotels" style={{color: "black",textDecoration: "none"}}>
            Hotels
          </Link>
        </NavBarLi>
        <NavBarLi>
          <Link to="/restaurants" style={{color: "black",textDecoration: "none"}}>
            Restaurants
          </Link>
        </NavBarLi>
      </NavbarUl>
    </>
  )
}

export default Nav