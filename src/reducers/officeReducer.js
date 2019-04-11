import {FETCH_OFFICES} from "../actions/types";

const initialState = {
    offices: []
}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_OFFICES:
          return {
              ...state,
              offices:action.payload
          };
        default:
        return state;
    }
}