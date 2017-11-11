import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from "./components/Card.js"
import CardBack from "./components/CardBack.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          <Card size="30px" suit="diamonds" value="A"/>
          <Card size="30px" suit="diamonds" value="2"/>
          <Card size="30px" suit="diamonds" value="3"/>
          <Card size="30px" suit="diamonds" value="4"/>
          <Card size="30px" suit="diamonds" value="5"/>
          <Card size="30px" suit="diamonds" value="6"/>
          <Card size="30px" suit="diamonds" value="7"/>
          <Card size="30px" suit="diamonds" value="8"/>
          <Card size="30px" suit="diamonds" value="9"/>
          <Card size="30px" suit="diamonds" value="10"/>
          <Card size="30px" suit="diamonds" value="J"/>
          <Card size="30px" suit="diamonds" value="Q"/>
          <Card size="30px" suit="diamonds" value="K"/>
          <CardBack size="30px"/>
          <Card size="30px" suit="hearts" value="A"/>
          <Card size="30px" suit="hearts" value="2"/>
          <Card size="30px" suit="hearts" value="3"/>
          <Card size="30px" suit="hearts" value="4"/>
          <Card size="30px" suit="hearts" value="5"/>
          <Card size="30px" suit="hearts" value="6"/>
          <Card size="30px" suit="hearts" value="7"/>
          <Card size="30px" suit="hearts" value="8"/>
          <Card size="30px" suit="hearts" value="9"/>
          <Card size="30px" suit="hearts" value="10"/>
          <Card size="30px" suit="hearts" value="J"/>
          <Card size="30px" suit="hearts" value="Q"/>
          <Card size="30px" suit="hearts" value="K"/>
          <CardBack size="30px"/>
          <Card size="30px" suit="spades" value="A"/>
          <Card size="30px" suit="spades" value="2"/>
          <Card size="30px" suit="spades" value="3"/>
          <Card size="30px" suit="spades" value="4"/>
          <Card size="30px" suit="spades" value="5"/>
          <Card size="30px" suit="spades" value="6"/>
          <Card size="30px" suit="spades" value="7"/>
          <Card size="30px" suit="spades" value="8"/>
          <Card size="30px" suit="spades" value="9"/>
          <Card size="30px" suit="spades" value="10"/>
          <Card size="30px" suit="spades" value="J"/>
          <Card size="30px" suit="spades" value="Q"/>
          <Card size="30px" suit="spades" value="K"/>
          <CardBack size="30px"/>
          <Card size="30px" suit="clubs" value="A"/>
          <Card size="30px" suit="clubs" value="2"/>
          <Card size="30px" suit="clubs" value="3"/>
          <Card size="30px" suit="clubs" value="4"/>
          <Card size="30px" suit="clubs" value="5"/>
          <Card size="30px" suit="clubs" value="6"/>
          <Card size="30px" suit="clubs" value="7"/>
          <Card size="30px" suit="clubs" value="8"/>
          <Card size="30px" suit="clubs" value="9"/>
          <Card size="30px" suit="clubs" value="10"/>
          <Card size="30px" suit="clubs" value="J"/>
          <Card size="30px" suit="clubs" value="Q"/>
          <Card size="30px" suit="clubs" value="K"/>
          <CardBack size="30px"/>
        </div>
      </div>
    );
  }
}

export default App;
