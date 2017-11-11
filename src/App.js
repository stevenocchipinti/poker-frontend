import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Hand from "./components/hand"
import Card from "./components/card"
import "./lib/actioncable-js/actioncable.js"

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

  componentDidMount() {
    const cable = window.ActionCable.createConsumer("ws://localhost:5000/cable")
    const deckChannel = cable.subscriptions.create({channel: "DeckChannel"}, {
      connected: () => {
        console.log("connected", this.identifier)
      },
      disconnected: () => {
        console.log("disconnected", this.identifier)
      },
      rejected: () => {
        console.log("rejected")
      },
      received: (data) => {
        this.setState({ hand: data.hand })
      },
    });
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
