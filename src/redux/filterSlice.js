import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ""
const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setStatusFilter: (state, {payload} ) => payload,
    }
})
export const { setStatusFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer