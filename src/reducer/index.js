import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice";
import eventReducer from "../slices/eventSlice"
import profileReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    eventData: eventReducer
})

export default rootReducer;