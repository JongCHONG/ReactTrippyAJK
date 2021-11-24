const ButtonPage = props => {
  return(
    <>
      <button onClick={props.onClick}>{props.numPage}</button>
    </>
  )
}

export default ButtonPage