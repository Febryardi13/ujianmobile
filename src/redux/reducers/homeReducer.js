import {
    ISI_LIST_POST
} from '../actions/types';

const INITIAL_STATE = {
    isiList: [],
    loading: true
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ISI_LIST_POST :
            return { isiList: action.payload, loading: false }
        default :
            return state
    }
}