import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
    userReducer,
    loginReducer,
})