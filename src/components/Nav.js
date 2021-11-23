import { Link } from "react-router-dom"
import styled from "styled-components"

// const Navbar = styled.ul`
  
// `
const Nav = () => {
  return (
    <>
      <Link to="/">
        Home
      </Link>
      <Link to="/hotels">
        Hotels
      </Link>
    </>
  )
}

export default Nav