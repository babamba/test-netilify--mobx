import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react" // MobX 에서 사용하는 Provider
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import CounterStore from "./stores/counter" // 방금 만든 스토어 불러와줍니다.
import UserStore from "./stores/user"
import ApiStore from "./stores/api/api"

const counter = new CounterStore() // 스토어 인스턴스를 만들고
const user = new UserStore()
const api = new ApiStore()

ReactDOM.render(
  <Provider counter={counter} user={user} api={api}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
