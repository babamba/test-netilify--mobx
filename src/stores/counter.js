import { observable, action, autorun, computed } from "mobx"
import { observer } from "mobx-react"

class CounterStore {
  @observable number = 0

  @action increase = () => {
    this.number++
  }

  @action decrease = () => {
    this.number--
  }
}

export default CounterStore
