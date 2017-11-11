import React from "react"
import suits from "./suit.js"
import CardThumbnail from "./CardThumbnail.js"
import BlankThumbnail from "./BlankThumbnail.js"

const styles = {
  communal: {
    backgroundColor: "#49c493",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1
  },
}

const CommunalCards = ({cards}) => (
  <div style={styles.communal}>
    {cards.map((card, index) => (
      card
      ? <CardThumbnail suit={card.suit} value={card.value}/>
      : <BlankThumbnail/>
    ))}
  </div>
)

export default CommunalCards
