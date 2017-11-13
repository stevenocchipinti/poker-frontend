import React, { Component } from 'react'
import "./lib/actioncable-js/actioncable.js"
import './App.css'
import Dealer from "./components/dealer"
import Hand from "./components/hand"
import Card from "./components/card"
import PlayerNamePrompt from "./components/playerNamePrompt"
import CommunalCards from "./components/communalCards"
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
      subscription: null,
      consumer: null,
    }
  }

  componentDidMount() {
    window.oncontextmenu = (event) => this.disableContextMenu(event)
    this.setState({ player: window.localStorage.getItem("player") }, () => {
      this.connectToGame()
    })
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

  onPlayerGiven(player) {
    this.setState({ player }, () => {
      window.localStorage.setItem("player", this.state.player)
      this.connectToGame()
    })
  }

  connectToGame() {
    const { player, consumer } = this.state

    if(!player) return
    if(consumer) consumer.disconnect()

    const socketUrl = `${BACKEND_SOCKET_URL}/cable`
    const newConsumer = window.ActionCable.createConsumer(socketUrl)
    const subscription = newConsumer.subscriptions.create(
      {
        channel: "GameChannel",
        player: player
      },
      {
        received: data => this.setState(data),
        fold: function() { this.perform("fold") },
      }
    )

    this.setState({ subscription, consumer: newConsumer })
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
        <PlayerNamePrompt
          open={!this.state.player}
          onClose={(player) => this.onPlayerGiven(player)}
        />
        <CommunalCards cards={communal}/>
        <div style={styles.table}>
          { this.hand() }
        </div>
        <Dealer/>
      </div>
    )
  }
}

export default App;
