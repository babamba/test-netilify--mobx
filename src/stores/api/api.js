import { observable, action } from "mobx"
import axios from "axios"

class ApiStore {
  @observable shortUrl = "값을 입력하고 변환 버튼을 눌러주세요"
  @observable status = false
  @observable testRows = []

  @action makeShortUrl = url => {
    axios
      .get(`http://222.105.187.66:53501/${url}`)
      .then(res => {
        if (res.status === 200) {
          this.rows = res.data
          console.log("res : ", res.data.rooms)
          // this.shortUrl = res.data.result.url
          this.testRows = res.data.rooms
          console.log("row : ", testRows)
          this.status = true
          return res.data.rooms
        } else {
          // this.shortUrl = ""
          this.status = false
        }
      })
      .catch(err => {
        this.shortUrl = ""
        this.status = false
      })
  }
}

export default ApiStore
