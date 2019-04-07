import { REGISTER_USER } from "../actions/types";


const initialState = {
    registerDetails: [],
}


export default function (state = initialState,action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                registerDetails: action.payload
            };

        default:
            return state;

    }

}