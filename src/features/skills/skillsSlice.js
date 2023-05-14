import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
    name: 'skills',
    initialState:{
        skills: [],
    },
    reducers:{
        getSkills: (state, action)=>{
            state.skills =action.payload;
        }
    }
});

export const {getSkills} = skillsSlice.actions;
export default skillsSlice.reducer;