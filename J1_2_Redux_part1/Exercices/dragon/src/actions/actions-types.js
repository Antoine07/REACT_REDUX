import { ADD_DRAGON, SET_DRAGON, REMOVE_DRAGON, REVERSE_DRAGON  } from '../constants/actions';

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

export const removeDragon = payload => {
    return {
        type: REMOVE_DRAGON,
        payload
    }
}

export const reverseDragons = () => {
    return {
        type: REVERSE_DRAGON
    }
}