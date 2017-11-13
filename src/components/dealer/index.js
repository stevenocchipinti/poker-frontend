import React, { Component } from 'react'
import { BACKEND_API_URL } from "../../config"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
  },
  button: {
    fontSize: "0.75em",
    lineHeight: 1,
    borderRadius: "0.25em",
    boxShadow: "0 0 2px black",
    backgroundColor: "white",
    padding: "0.2em",
    margin: "0.1em",
  },
}

export default class Dealer extends Component {
  makeCall(action) {
    fetch(`${BACKEND_API_URL}/${action}`)
  }

  render() {
    return (
      <div style={styles.container}>
        <button
          onClick={() => this.makeCall("deal")}
          style={styles.button}
        >
          Deal
        </button>
        <button
          onClick={() => this.makeCall("flop")}
          style={styles.button}
        >
          Flop
        </button>
        <button
          onClick={() => this.makeCall("turn")}
          style={styles.button}
        >
          Turn
        </button>
        <button
          onClick={() => this.makeCall("river")}
          style={styles.button}
        >
          River
        </button>
        <button
          onClick={() => this.makeCall("end-round")}
          style={styles.button}
        >
          End Round
        </button>
        <button
          onClick={() => this.makeCall("end-game")}
          style={styles.button}
        >
          End Game
        </button>
      </div>
    )
  }
}
