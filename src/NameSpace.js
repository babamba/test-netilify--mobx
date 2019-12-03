import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import { Button } from "@material-ui/core"

@inject(stores => ({
  username: stores.user.username,
  getUserName: stores.user.getUserName,
  setUserName: stores.user.setUserName,
  makeShortUrl: stores.api.makeShortUrl
}))
@observer
class NameSpace extends Component {
  render() {
    const { username, setUserName, makeShortUrl } = this.props
    const url = "v1/rooms"
    return (
      <div>
        <h1>{username ? username : ""}</h1>
        <Button variant="contained" color="primary" onClick={() => makeShortUrl(url)}>
          set user namespace
        </Button>
      </div>
    )
  }
}

export default NameSpace
