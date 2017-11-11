import React from "react"
import suits from "./suit.js"
import king from "../assets/king.png"
import queen from "../assets/queen.png"
import jack from "../assets/jack.png"

const styles = {
  art: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "4.5em",
    width: "2.7em",
    margin: ".5em",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: "1",
    alignItems: "center",
  },
  suit: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    width: "2.5em"
  },
}

const eh = {
  'K': king,
  'Q': queen,
  'J': jack,
}

const CardArt = ({suit, value}) => (
  value === "A"
  ? (
    <div style={styles.art}>
      <div style={{...styles.suit, fontSize: "3em"}}>{suits[suit]}︎</div>
    </div>
  )
  : (
    <div style={styles.art}>
      <img style={styles.picture} src={eh[value]} />
    </div>
  )
)

export default CardArt
