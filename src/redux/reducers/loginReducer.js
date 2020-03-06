import {
    INPUT_USERNAME,
    USER_LOGIN_GAGAL,
    LOADING_LOGIN,
    USER_LOGIN_SUKSES
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    error: '',
    loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_USERNAME :
            return { ...state, [action.payload.prop]: action.payload.value }
        case USER_LOGIN_GAGAL :
            return { ...state, loading: false, error: action.payload }
        case LOADING_LOGIN :
            return { ...state, loading: true, error: '' }
        case USER_LOGIN_SUKSES :
            return INITIAL_STATE
        default :
            return state      
    }
}