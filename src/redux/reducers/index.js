import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'
import restoranReducer from './restoranReducer'

export default combineReducers({
    user:userReducer,
    login:loginReducer,
    homelist:homeReducer,
    restoDetail:restoranReducer
})