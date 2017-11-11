import React, { Component, Children, cloneElement } from 'react'

const styles = {
  hand: {
    position: "relative",
    height: "5em"
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
    const { children } = this.props;
    const width = 3.55 + (children.length - 1) * offsetEm;

    return (
      <div
        style={{...styles.hand, width: `${width}em`}}
        onTouchStart={() => this.handleTouchStart()}
        onTouchEnd={() => this.handleTouchEnd()}
        onMouseDown={() => this.handleTouchStart()}
        onMouseUp={() => this.handleTouchEnd()}
      >
        {
          Children.map(
            children,
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
