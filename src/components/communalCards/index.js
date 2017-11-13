import React from "react"
import CardThumbnail from "./CardThumbnail.js"
import BlankThumbnail from "./BlankThumbnail.js"

const styles = {
  communal: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
      ? <CardThumbnail key={index} suit={card.suit} value={card.value}/>
      : <BlankThumbnail key={index}/>
    ))}
  </div>
)

export default CommunalCards
