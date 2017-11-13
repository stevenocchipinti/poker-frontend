import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class PlayerNamePrompt extends Component {
  constructor() {
    super()
    this.state = {
      nameValue: "",
    }
  }

  handleChange(event) {
    this.setState({ nameValue: event.target.value })
  }

  handleClose() {
    this.props.onClose(this.state.nameValue)
    this.setState({ nameValue: null })
  }

  handleSubmit(event) {
    this.handleClose()
    event.stopPropagation()
    event.preventDefault()
    return false
  }

  render() {
    return (
      <div>
        <Dialog
          title="Who are you?"
          actions={
            <FlatButton
              label="Got it."
              primary
              onClick={() => this.handleClose()}
              disabled={!this.state.nameValue}
            />
          }
          modal={true}
          open={this.props.open}
          onRequestClose={() => this.handleClose()}
        >
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <TextField
              value={this.state.nameValue}
              onChange={(event) => this.handleChange(event)}
              floatingLabelText="Your name"
              fullWidth
            />
          </form>
        </Dialog>
      </div>
    )
  }
}

export default PlayerNamePrompt
