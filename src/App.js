import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from "./components/card"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          <Card size={30} suit="diamonds" value="A"/>
          <Card size={30} suit="diamonds" value="2"/>
          <Card size={30} suit="diamonds" value="3"/>
          <Card size={30} suit="diamonds" value="4"/>
          <Card size={30} suit="diamonds" value="5"/>
          <Card size={30} suit="diamonds" value="6"/>
          <Card size={30} suit="diamonds" value="7"/>
          <Card size={30} suit="diamonds" value="8"/>
          <Card size={30} suit="diamonds" value="9"/>
          <Card size={30} suit="diamonds" value="10"/>
          <Card size={30} suit="diamonds" value="J"/>
          <Card size={30} suit="diamonds" value="Q"/>
          <Card size={30} suit="diamonds" value="K"/>
          <Card size={30} suit="hearts" value="A"/>
          <Card size={30} suit="hearts" value="2"/>
          <Card size={30} suit="hearts" value="3"/>
          <Card size={30} suit="hearts" value="4"/>
          <Card size={30} suit="hearts" value="5"/>
          <Card size={30} suit="hearts" value="6"/>
          <Card size={30} suit="hearts" value="7"/>
          <Card size={30} suit="hearts" value="8"/>
          <Card size={30} suit="hearts" value="9"/>
          <Card size={30} suit="hearts" value="10"/>
          <Card size={30} suit="hearts" value="J"/>
          <Card size={30} suit="hearts" value="Q"/>
          <Card size={30} suit="hearts" value="K"/>
          <Card size={30} suit="spades" value="A"/>
          <Card size={30} suit="spades" value="2"/>
          <Card size={30} suit="spades" value="3"/>
          <Card size={30} suit="spades" value="4"/>
          <Card size={30} suit="spades" value="5"/>
          <Card size={30} suit="spades" value="6"/>
          <Card size={30} suit="spades" value="7"/>
          <Card size={30} suit="spades" value="8"/>
          <Card size={30} suit="spades" value="9"/>
          <Card size={30} suit="spades" value="10"/>
          <Card size={30} suit="spades" value="J"/>
          <Card size={30} suit="spades" value="Q"/>
          <Card size={30} suit="spades" value="K"/>
          <Card size={30} suit="clubs" value="A"/>
          <Card size={30} suit="clubs" value="2"/>
          <Card size={30} suit="clubs" value="3"/>
          <Card size={30} suit="clubs" value="4"/>
          <Card size={30} suit="clubs" value="5"/>
          <Card size={30} suit="clubs" value="6"/>
          <Card size={30} suit="clubs" value="7"/>
          <Card size={30} suit="clubs" value="8"/>
          <Card size={30} suit="clubs" value="9"/>
          <Card size={30} suit="clubs" value="10"/>
          <Card size={30} suit="clubs" value="J"/>
          <Card size={30} suit="clubs" value="Q"/>
          <Card size={30} suit="clubs" value="K"/>
        </div>
      </div>
    );
  }
}

export default App;
