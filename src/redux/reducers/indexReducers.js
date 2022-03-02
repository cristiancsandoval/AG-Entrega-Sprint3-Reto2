import {combineReducers} from 'redux'
import {notasReducer} from './notasReducer'

const reducer = combineReducers({notas: notasReducer})

export default reducer