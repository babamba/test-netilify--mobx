import { observable, action } from "mobx"

export default class UserStore {
  @observable username = "-"

  @action getUserName = () => {
    return this.username
  }

  @action setUserName = () => {
    this.username = "test"
  }
}
