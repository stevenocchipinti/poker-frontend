import React, { Component } from 'react'

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
  render() {
    const width = 3.55 + (this.props.children.length - 1) * offsetEm;
    return (
      <div style={{...styles.hand, width: `${width}em`}}>
        {
          this.props.children.map((child, index) => (
            <div style={{
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
