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
    this.state = { revealed: false }
  }

  handleTouchStart() {
    this.setState({ revealed: true })
  }

  handleTouchEnd() {
    this.setState({ revealed: false })
  }

  render() {
    const { revealed } = this.state;
    const { children, visible } = this.props;
    const width = 3.55 + (children.length - 1) * offsetEm;
    const transform = `translateY(${visible ? 0 : "-100vh"})`

    return (
      <div
        style={{...styles.hand, width: `${width}em`, transform}}
        onTouchStart={() => this.handleTouchStart()}
        onTouchEnd={() => this.handleTouchEnd()}
        onMouseDown={() => this.handleTouchStart()}
        onMouseUp={() => this.handleTouchEnd()}
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
      </div>
    )
  }
}

export default Hand
