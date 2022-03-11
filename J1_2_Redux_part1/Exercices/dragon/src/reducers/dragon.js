import { ADD_DRAGON, SET_DRAGON } from '../constants/actions';

// initialisation des states : SOURCE DE VERITE
const initialState = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    count: 0,
    dragon : ''
}

const reducerDragon = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_DRAGON:
            const  dragon  = action.payload;

            console.log(dragon);

            return {
                ...state,
                dragon
            }

        case ADD_DRAGON:

            return { ...state }

        default:
            return state;
    }
}

export default reducerDragon;