import React from "react"
import suits from "./suit.js"

const styles = {
  art: {
    display: "flex",
    justifyContent: "space-around",
    height: "4em",
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
    fontSize: "0.75em",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
}

const column = (numberOfElements, suit) => {
  let thecolumn = []
  for(let i = 0; i < numberOfElements; i++)
    thecolumn.push(true)

  return (
    <div style={styles.column}>
      { thecolumn.map((_,index) => (
        <div key={index} style={styles.suit}>{suit}︎</div>
      ))}
    </div>
  )
}

const patternMap = {
  2: [0,2,0],
  3: [0,3,0],
  4: [2,0,2],
  5: [2,1,2],
  6: [3,0,3],
  7: [3,1,3],
  8: [3,2,3],
  9: [4,1,4],
  10: [4,2,4],
}

const CardPattern = ({suit, value}) => {
  const pattern = patternMap[value]
  const suitArt = suits[suit]
  return (
    <div style={styles.art}>
      { column(pattern[0], suitArt) }
      { column(pattern[1], suitArt) }
      { column(pattern[2], suitArt) }
    </div>
  )
}

export default CardPattern
