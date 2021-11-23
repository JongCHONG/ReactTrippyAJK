import { Link } from "react-router-dom"

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