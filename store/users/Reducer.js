import * as actionTypes from './ActionTypes';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_USERS:
            return action.payload;

        default:
            return state
    }
}

