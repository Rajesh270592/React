import {combineReducers} from 'redux'
import ShopReducers from './Reducers/ShopReducers'
import CounterReducer from './Reducers/CounterReducer'
import { LoginReducer } from './Reducers/LoginReducer'
import { CartReducer } from './Reducers/CartReducer'
import { FormReducer } from './Reducers/FormReducer'
export default combineReducers({
    ShopReducers:ShopReducers,
    CounterReducer:CounterReducer,
    LoginReducer:LoginReducer,
    CartReducer:CartReducer,
    FormReducer:FormReducer

})