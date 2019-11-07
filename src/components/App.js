import React from "react"
import { Provider } from "react-redux"

import Main from './Main'
import Secondary from './Form'

import store from "../store"
import '../styles/list.css'



function App(props) {

  return (
    <Provider store={store}>
      <div>
      <Secondary />
      <Main />
      </div>
    </Provider>
  )
}

export default App
