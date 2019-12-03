import React from "react"
import "./App.css"
import MetaTags from "react-meta-tags"

import Counter from "./Counter"
import NameSpace from "./NameSpace"
import List from "./List"

function App() {
  return (
    <div className="App">
      <MetaTags>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </MetaTags>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <NameSpace />
        <List />
      </header>
    </div>
  )
}

export default App
