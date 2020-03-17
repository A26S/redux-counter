import { combineReducers} from 'redux'
import countReducer from './countReducer'

export const rootReducer = combineReducers({
    counter: countReducer
})