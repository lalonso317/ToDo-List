import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import exampleReducer from "./reducers/Reducer"
import listReducer from "./reducers/Reducer"

const rootReducer = combineReducers({
  exampleReducer,
  listReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
