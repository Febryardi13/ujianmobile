import {
    USER_LOGIN_GAGAL,
    USER_LOGIN_SUKSES
} from '../actions/types';

const INITIAL_STATE = {
    authChecked: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUKSES :
            return { ...action.payload, authChecked: true }
        case USER_LOGIN_GAGAL :
            return { authChecked: true }
        default :
            return state
    }
}
