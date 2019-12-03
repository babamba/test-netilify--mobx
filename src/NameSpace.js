import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import { Button } from "@material-ui/core"

@inject(stores => ({
  username: stores.user.username,
  getUserName: stores.user.getUserName,
  setUserName: stores.user.setUserName
}))
@observer
class NameSpace extends Component {
  render() {
    const { username, setUserName } = this.props

    return (
      <div>
        <h1>{username ? username : ""}</h1>
        <Button variant="contained" color="primary" onClick={() => setUserName()}>
          set user namespace
        </Button>
      </div>
    )
  }
}

export default NameSpace
