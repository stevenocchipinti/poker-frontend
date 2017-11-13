import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import DealIcon from 'material-ui/svg-icons/content/content-copy'
import FlopIcon from 'material-ui/svg-icons/image/filter-3'
import TurnIcon from 'material-ui/svg-icons/image/filter-4'
import RiverIcon from 'material-ui/svg-icons/image/filter-5'
import EndRoundIcon from 'material-ui/svg-icons/navigation/refresh'
import EndGameIcon from 'material-ui/svg-icons/navigation/cancel'
import { BACKEND_API_URL } from "../../config"

export default class Dealer extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  makeCall(action) {
    fetch(`${BACKEND_API_URL}/${action}`)
  }

  render() {
    return (
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
      >
        <AppBar title="Dealer" showMenuIconButton={false} />
        <MenuItem
          onClick={() => this.makeCall("deal")}
          leftIcon={<DealIcon/>}
        >
          Deal
        </MenuItem>

        <Divider/>

        <MenuItem
          onClick={() => this.makeCall("flop")}
          leftIcon={<FlopIcon/>}
        >
          Flop
        </MenuItem>
        <MenuItem
          onClick={() => this.makeCall("turn")}
          leftIcon={<TurnIcon/>}
        >
          Turn
        </MenuItem>
        <MenuItem
          onClick={() => this.makeCall("river")}
          leftIcon={<RiverIcon/>}
        >
          River
        </MenuItem>

        <Divider/>

        <MenuItem
          onClick={() => this.makeCall("end-round")}
          leftIcon={<EndRoundIcon/>}
        >
          End Round
        </MenuItem>
        <MenuItem
          onClick={() => this.makeCall("end-game")}
          leftIcon={<EndGameIcon/>}
        >
          End Game
        </MenuItem>
      </Drawer>
    )
  }
}
