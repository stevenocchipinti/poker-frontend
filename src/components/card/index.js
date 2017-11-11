import React, { Component } from 'react'
import CardFront from "./CardFront.js"
import CardBack from "./CardBack.js"

const styles = {
  card: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "5em",
    width: "3.55em",
    margin: "0.1em",
  },
  front: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    height: "100%",
    width: "100%",
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 200,
    height: "100%",
    width: "100%",
  },
}

class Card extends Component {
  render() {
    const {size, suit, value} = this.props
    const color = (suit === "spades" || suit === "clubs") ? "black" : "red"

    return (
      <div style={{...styles.card, fontSize: (size || 20), color: color}}>
        <div style={styles.back}><CardBack /></div>
        <div style={styles.front}><CardFront suit={suit} value={value}/></div>
      </div>
    )
  }
}

export default Card
