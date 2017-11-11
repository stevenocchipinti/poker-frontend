import React from "react"
import suits from "./suit.js"
import king from "./assets/king.svg"
import queen from "./assets/queen.svg"
import jack from "./assets/jack.svg"

const styles = {
  art: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "4.5em",
    width: "2.7em",
    margin: ".5em",
  },
  ace: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3em",
  },
  picture: {
    width: "2.5em"
  },
}

const artWork = {
  'K': king,
  'Q': queen,
  'J': jack,
}

const CardArt = ({suit, value}) => (
  value === "A"
  ? (
    <div style={styles.art}>
      <div style={styles.ace}>{suits[suit]}︎</div>
    </div>
  )
  : (
    <div style={styles.art}>
      <img style={styles.picture} src={artWork[value]} />
    </div>
  )
)

export default CardArt
