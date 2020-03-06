import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    ISI_LIST_POST,
    GET_RESTAURANT_DETAILS
} from './types';

export const getIsiListPost = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                                        headers:{
                                            "user-key":"89c15b9d5898f521ab8b70770614ac98"
                                        }
                                    })
    
            console.log(res.data.restaurants[0])
            dispatch({
                type: ISI_LIST_POST,
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getRestaurantDetails = (resto) => {
    return {
        type: GET_RESTAURANT_DETAILS,
        payload: resto
    }
}