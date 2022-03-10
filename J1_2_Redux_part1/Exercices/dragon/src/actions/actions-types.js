import { ADD_DRAGON } from '../constants/actions';

export const addDragon = payload => {
    return {
        type: ADD_DRAGON, payload
    }
};