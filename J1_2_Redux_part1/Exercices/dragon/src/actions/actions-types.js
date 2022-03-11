import { ADD_DRAGON, SET_DRAGON } from '../constants/actions';

export const addDragon = payload => {
    return {
        type: ADD_DRAGON, payload
    }
};

export const setDragon = payload => {
    return {
        type: SET_DRAGON, payload
    }
};