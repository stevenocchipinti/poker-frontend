import React, { Component } from 'react'
import { BACKEND_ADDRESS } from "../../config"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
  },
  button: {
    fontSize: "1em",
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
    fetch(`http://${BACKEND_ADDRESS}/${action}`)
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
          onClick={() => this.makeCall("reset")}
          style={styles.button}
        >
          Reset
        </button>
      </div>
    )
  }
}
