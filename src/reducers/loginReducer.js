import {LOGIN_USER} from "../actions/types";


const initialState = {
    loginDetails: [],
}


export default function (state = initialState,action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginDetails: action.payload
            };

        default:
            return state

    }

}