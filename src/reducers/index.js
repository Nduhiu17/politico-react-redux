import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import officeReducer from "./officeReducer";



export default combineReducers({
    user:loginReducer,
    offices: officeReducer

});