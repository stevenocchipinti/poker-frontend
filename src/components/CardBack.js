import React from "react"
import back from "../assets/back.png"

const styles = {
  back: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "0.25em",
    boxShadow: "0 0 2px black",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    height: "5em",
    width: "3.55em",
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
