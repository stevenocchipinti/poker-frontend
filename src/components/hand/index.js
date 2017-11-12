import React, { Component, Children, cloneElement } from 'react'

const styles = {
  hand: {
    position: "relative",
    height: "5em",
  },
  card: {
    position: "absolute"
  }
}

const offsetEm = 0.5
const foldSpeed = 30

class Hand extends Component {
  constructor() {
    super()
    this.state = {
      revealed: false,
      startY: 0,
      currentY: 0,
      moving: false,
      shouldFold: false,
    }
  }

  componentWillUpdate(newProps, newState) {
    if (newProps.children.length > this.props.children.length) {
      this.setState({folded: false})
    }
  }

  handleTouchStart(event) {
    this.setState({
      revealed: true,
      moving: true,
      startY: event.touches[0].clientY,
      currentY: event.touches[0].clientY,
    })
  }

  handleTouchEnd(event) {
    if (this.state.shouldFold) this.fold()
    this.setState({
      revealed: false,
      moving: false,
      startY: 0,
      currentY: 0,
    })
  }

  handleTouchMove(event) {
    this.setState({
      currentY: event.touches[0].clientY,
      shouldFold: this.state.currentY - event.touches[0].clientY > foldSpeed
    })
  }

  fold() {
    this.setState({ folded: true }, () => this.props.fold())
  }

  render() {
    const { revealed, startY, currentY, moving, folded } = this.state;
    const { children, visible } = this.props;

    const width = 3.55 + (children.length - 1) * offsetEm;
    const distance = Math.min(currentY-startY,0)

    const transform = folded || !visible
      ? "translateY(-100vh)"
      : `translateY(${distance}px)`
    const transition = !moving ? "200ms ease-out" : "initial"

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
      </div>
    )
  }
}

export default Hand
