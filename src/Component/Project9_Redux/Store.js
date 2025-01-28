import {applyMiddleware, createStore} from 'redux'
import RootReducers from './RootReducers'
// import {thunk} from "redux-thunk"

export const store = createStore(RootReducers)