import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        defaultLanguage: (state, action) => {
            state.lang = 'en';
        }
    }
});

export const {changeLanguage, defaultLanguage} = configSlice.actions;
export default configSlice.reducer;