import { RiStarSFill } from 'react-icons/ri'

const Stars = (props) => {
  const { numStars } = props
  const arrayStars = []

  for ( let i = 1; i <= numStars; i++) {
    arrayStars.push(i)
  }

  console.log(numStars)
  return(
    <>
    {arrayStars.map(element => <RiStarSFill /> )}
    </>
  )
}

export default Stars