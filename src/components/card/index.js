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
    const {suit, value, revealed} = this.props
    const color = (suit === "spades" || suit === "clubs") ? "black" : "red"

    return (
      <div style={{...styles.card, color: color}}>
        <div style={{...styles.back, display: revealed ? "none" : "initial"}}><CardBack /></div>
        <div style={styles.front}><CardFront suit={suit} value={value}/></div>
      </div>
    )
  }
}

export default Card
