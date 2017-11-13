import React, { Component } from 'react'
import './App.css'
import Dealer from "./components/dealer"
import Hand from "./components/hand"
import Card from "./components/card"
import CommunalCards from "./components/communalCards"
import "./lib/actioncable-js/actioncable.js"
import { BACKEND_SOCKET_URL } from "./config"

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: 60,
    overflow: "hidden",
    userSelect: "none",
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
    window.oncontextmenu = (event) => this.disableContextMenu(event)
    const name = window.prompt("Please enter your own (and not someone elses) name")
    const socketUrl = `${BACKEND_SOCKET_URL}/cable`
    const cable = window.ActionCable.createConsumer(socketUrl)
    const channel = cable.subscriptions.create({ channel: "GameChannel", player: name}, {
      received: data => this.setState(data),
      fold: function() { this.perform("fold") },
    })
    this.setState({ player: name, channel })
  }

  disableContextMenu(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }

  fold() {
    this.setState({ hand: [] })
    this.state.channel.fold()
  }

  hand() {
    const { hand } = this.state;
    return (
      <Hand
        fold={() => this.fold()}
        visible={hand.filter(c => c).length > 0}
      >
        {hand.filter(c => c).map((card, index) => (
          <Card key={index} suit={card.suit} value={card.value}/>
        ))}
      </Hand>
    )
  }

  render() {
    const { communal } = this.state
    return (
      <div style={styles.layout}>
        <CommunalCards cards={communal}/>
        <div style={styles.table}>
          { this.hand() }
        </div>
        <Dealer/>
      </div>
    );
  }
}

export default App;
