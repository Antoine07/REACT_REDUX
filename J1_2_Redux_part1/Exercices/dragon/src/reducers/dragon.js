import { ADD_DRAGON, SET_DRAGON, REMOVE_DRAGON, REVERSE_DRAGON} from '../constants/actions';

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
            return { ...state, dragons: [...state.dragons, action.payload] }

        case REMOVE_DRAGON:
            const dragonsFiltered = state.dragons.filter((d, i) => i !== action.payload);
            return {...state, dragons: dragonsFiltered};

        case REVERSE_DRAGON:
            const reversedDragons = [...state.dragons];
            reversedDragons.reverse();
            return { ...state, dragons: reversedDragons}

        default:
            return state;
    }
}

export default reducerDragon;