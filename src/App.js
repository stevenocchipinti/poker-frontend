import React, { Component } from 'react'
import './App.css'
import Hand from "./components/hand"
import Card from "./components/card"
import CommunalCards from "./components/communalCards"
import "./lib/actioncable-js/actioncable.js"

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: 60,
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
    this.state = {
      player: null,
      communal: [null, null, null, null, null],
      hand: [
        { suit: "diamonds", value: "A" },
        { suit: "spades", value: "J" },
        { suit: "hearts", value: "Q" },
        { suit: "clubs", value: "K" },
      ]
    }
  }

  componentDidMount() {
    const name = window.prompt("Who the hell are you?!")
    const cable = window.ActionCable.createConsumer("ws://localhost:5000/cable")
    cable.subscriptions.create({ channel: "GameChannel", player: name}, {
      received: (data) => this.setState(data),
    })
    this.setState({ player: name })
  }

  render() {
    const { hand, communal } = this.state
    return (
      <div style={styles.layout}>
        <CommunalCards cards={communal}/>
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
