import React from "react"
import suits from "./suit.js"

const styles = {
  thumbnail: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.5em",
    textAlign: "right",
    lineHeight: 1,
    alignItems: "center",
    width: "1.5em",
    height: "2em",
    borderRadius: "0.25em",
    boxShadow: "0 0 2px black",
    backgroundColor: "white",
    padding: "0.1em",
  },
}

const CardThumbnail = ({suit, value}) => {
  const suitArt = <div>{suits[suit]}︎</div>
  const suitValue = <div>{value}︎</div>
  const color = (suit === "spades" || suit === "clubs") ? "black" : "red"

  return (
    <div style={{...styles.thumbnail, color: color}}>
      {suitValue}{suitArt}
    </div>
  )
}

export default CardThumbnail
