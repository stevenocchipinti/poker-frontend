import React from "react"
import CardArt from "./CardArt.js"
import CardPattern from "./CardPattern.js"
import suits from "./suit.js"

const styles = {
  card: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "0.25em",
    boxShadow: "0 0 2px black",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    height: "5em",
  },
  topCorner: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    fontSize: "0.5em",
    top: 0,
    left: 0,
    textAlign: "left",
    lineHeight: 1,
    marginTop: "0.25em",
    marginLeft: "0.05em",
    alignItems: "center",
  },
  bottomCorner: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.5em",
    position: "absolute",
    bottom: 0,
    right: 0,
    textAlign: "right",
    lineHeight: 1,
    marginBottom: "0.25em",
    marginRight: "0.05em",
    alignItems: "center",
    transform: "rotate(180deg)"
  },
}

const Card = ({size, suit, value}) => {
  const suitArt = <div>{suits[suit]}︎</div>
  const suitValue = <div>{value}︎</div>
  const color = (suit === "spades" || suit === "clubs") ? "black" : "red"

  return (
    <div style={{...styles.card, fontSize: size, color: color}}>
      <div style={styles.topCorner}>{suitValue}{suitArt}</div>
        {
          Number.isInteger(Number.parseInt(value))
            ? <CardPattern suit={suit} value={value}/>
            : <CardArt suit={suit} value={value}/>
        }
      <div style={styles.bottomCorner}>{suitValue}{suitArt}</div>
    </div>
  )
}

export default Card
