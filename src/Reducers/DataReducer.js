import { createReducer } from "@reduxjs/toolkit";

export const DataReducer = createReducer({}, {
    TICKET_REQUEST : (state) => {
        state.loading = true;
    },
    TICKET_SUCCESS : (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    TICKET_FAILURE : (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});


export const SelectDataReducer = createReducer({}, {
    SELECT_TICKET_REQUEST : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    SELECT_TICKET_SUCCESS : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    SELECT_TICKET_FAILURE : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});