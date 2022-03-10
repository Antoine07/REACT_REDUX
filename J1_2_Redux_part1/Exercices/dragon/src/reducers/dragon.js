import { ADD_DRAGON } from '../constants/actions';

// initialisation des states : SOURCE DE VERITE
const initialState = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    count: 0
}

const reducerDragon = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
            // TODO

            return { ...state }

        default:
            return state;
    }
}

export default reducerDragon;