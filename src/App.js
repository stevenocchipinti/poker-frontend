import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Hand from "./components/hand"
import Card from "./components/card"

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: 60,
  },
  floppyRiverTurn: {
    backgroundColor: "#49c493",
    flexGrow: 1
  },
  table: {
    flexGrow: 8,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    marginBottom: "0.5em",
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { hand: [
      { suit: "diamonds", value: "A" },
      { suit: "spades", value: "A" },
      { suit: "hearts", value: "A" },
      { suit: "clubs", value: "A" },
    ] }
  }
  render() {
    const { hand } = this.state
    return (
      <div style={styles.layout}>
        <div style={styles.floppyRiverTurn}>Floppy River</div>
        <div style={styles.table}>
          <Hand>
            {hand.map(({suit, value}, index) => (
              <Card key={index} suit={suit} value={value}/>
            ))}
          </Hand>
        </div>
      </div>
    );
  }
}

export default App;
