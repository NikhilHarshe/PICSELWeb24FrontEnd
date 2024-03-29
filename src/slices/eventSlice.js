import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    event: null,
    editEvent: false,
}

const eventSlice = createSlice({
    name: "eventData",
    initialState,
    reducers: {
        setEvent: (state, action) => {
            state.event = action.payload
        },
        setEditEvent: (state, action) => {
            state.editEvent = action.payload
        },
    },
})

export const {
    setEvent,
    setEditEvent
} = eventSlice.actions

export default eventSlice.reducer