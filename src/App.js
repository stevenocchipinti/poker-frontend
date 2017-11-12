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
    overflow: "hidden",
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
      hand: [],
      channel: null,
    }
  }

  componentDidMount() {
    const name = window.prompt("Who the hell are you?!")
    const cable = window.ActionCable.createConsumer("ws://localhost:5000/cable")
    const channel = cable.subscriptions.create({ channel: "GameChannel", player: name}, {
      received: data => this.setState(data),
      fold: function() { this.perform("fold") },
    })
    this.setState({ player: name, channel })
  }

  fold() {
    this.setState({ hand: [] })
    this.state.channel.fold()
  }

  render() {
    const { hand, communal } = this.state
    return (
      <div style={styles.layout}>
        <CommunalCards cards={communal}/>
        <div style={styles.table}>
          <Hand
            fold={() => this.fold()}
            visible={hand.filter(c => c).length > 0}
          >
            {hand.filter(c => c).map((card, index) => (
              <Card key={index} suit={card.suit} value={card.value}/>
            ))}
          </Hand>
        </div>
      </div>
    );
  }
}

export default App;
