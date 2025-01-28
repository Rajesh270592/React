
import { BUYBOOK, SELLBOOK } from '../Constants'

let initialState = {
    totalBooks : 100
}
export default function ShopReducers(state=initialState, action){
  switch(action.type){
    case BUYBOOK :
        return{
            ...state,
            totalBooks: state.totalBooks+1
        }

        case SELLBOOK : 
        return{
            ...state,
            totalBooks:state.totalBooks-1
        }
        default :
        return state
  }
  
}
