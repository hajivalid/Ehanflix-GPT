import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchToggle: false,
    },
    reducers: {
        toggleSearch: (state) => {
            state.searchToggle =!state.searchToggle;
        },
        defaultSearchToggle: (state) => {
            state.searchToggle = false;
        }
    }
});

export const {toggleSearch, defaultSearchToggle} = searchSlice.actions;
export default searchSlice.reducer