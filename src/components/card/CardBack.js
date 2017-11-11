import React from "react"
import back from "./assets/back.svg"

const styles = {
  back: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "0.25em",
    boxShadow: "0 0 2px black",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
  },
}

const CardBack = ({size}) => {
  return (
    <div style={{...styles.back, fontSize: size}}></div>
  )
}

export default CardBack
