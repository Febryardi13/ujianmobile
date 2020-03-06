import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    INPUT_USERNAME,
    LOADING_LOGIN,
    USER_LOGIN_SUKSES,
    USER_LOGIN_GAGAL
} from './types';

export const onInputUsername = (prop, value) => {
    return {
        type: INPUT_USERNAME,
        payload: { 
            prop, value
        }
    }
}

export const onLoginUser = ({ username}) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_LOGIN })

            await AsyncStorage.setItem('username', username);
            dispatch({ 
                type: USER_LOGIN_SUKSES,
                payload: { username }
            })
        } catch(err) {
            dispatch({
                type: USER_LOGIN_GAGAL,
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}

export const onCheckUser = () => {
    return async (dispatch) => {
        try {
            const username = await AsyncStorage.getItem('username');
            if(!username) {
                return dispatch({ type: USER_LOGIN_GAGAL })
            }

            dispatch({
                type: USER_LOGIN_SUKSES,
                payload: { username }
            })
        } catch(err) {
            dispatch({ type: USER_LOGIN_GAGAL })
        }  
    }
}

export const onLogoutUser = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('username')
        dispatch({ type: USER_LOGIN_GAGAL })
    }
}