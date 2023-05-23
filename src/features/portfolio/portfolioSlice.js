import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState:{
        works: [],
    },
    reducers:{
        getWorks: (state, action)=>{
            state.works =action.payload;
        }
    }
});

export const {getWorks} = portfolioSlice.actions;
export default portfolioSlice.reducer;