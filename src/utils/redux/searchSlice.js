import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchToggle: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleSearch: (state) => {
            state.searchToggle =!state.searchToggle;
        },
        addGPTMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        defaultSearchToggle: (state) => {
            state.searchToggle = false;
        }
    }
});

export const {toggleSearch, addGPTMovieResults, defaultSearchToggle} = searchSlice.actions;
export default searchSlice.reducer