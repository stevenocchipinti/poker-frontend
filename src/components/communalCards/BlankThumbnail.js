import React from "react"

const styles = {
  blank: {
    display: "inline-block",
    fontSize: "0.5em",
    width: "1.5em",
    height: "2em",
    borderRadius: "0.25em",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "0.1em",
  },
}

const BlankThumbnail = () => (
  <div style={styles.blank}></div>
)

export default BlankThumbnail
