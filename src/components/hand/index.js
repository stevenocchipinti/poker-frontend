import React, { Component, Children, cloneElement } from 'react'

const styles = {
  hand: {
    position: "relative",
    height: "5em",
    transition: "400ms ease-in-out"
  },
  card: {
    position: "absolute"
  }
}

const offsetEm = 0.5;

class Hand extends Component {
  constructor() {
    super()
    this.state = {
      revealed: false,
      startY: 0,
      endY: 0,
      moving: false,
    }
  }

  handleTouchStart(event) {
    this.setState({
      revealed: true,
      moving: true,
      startY: event.touches[0].clientY,
      endY: event.touches[0].clientY,
    })
  }

  handleTouchEnd(event) {
    this.setState({
      revealed: false,
      moving: false,
      startY: 0,
      endY: 0
    })
  }

  handleTouchMove(event) {
    this.setState({
      endY: event.touches[0].clientY
    })
  }

  render() {
    const { revealed, startY, endY, moving } = this.state;
    const { children, visible } = this.props;
    const width = 3.55 + (children.length - 1) * offsetEm;
    const transform = `translateY(${visible ? `${Math.min(endY-startY,0)}px` : "-100vh"})`
    const transition = !moving ? "400ms ease-in-out" : "initial"

    return (
      <div
        style={{...styles.hand, width: `${width}em`, transform, transition}}
        onTouchStart={(event) => this.handleTouchStart(event)}
        onTouchEnd={(event) => this.handleTouchEnd(event)}
        onTouchMove={(event) => this.handleTouchMove(event)}
      >
        {
          Children.map(
            children.filter(c => c),
            child => cloneElement(child, {revealed})
          ).map((child, index) => (
            <div key={index} style={{
              ...styles.card,
              left: `${index * offsetEm}em`
            }}>
              {child}
            </div>
          ))
        }
        <div>Much Lol: {startY} {endY}</div>
      </div>
    )
  }
}

export default Hand
