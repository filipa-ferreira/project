import { createSlice } from "@reduxjs/toolkit";

const hardSkillsSlice = createSlice({
    name: 'hardSkills',
    initialState:{
        hardSkills: [],
    },
    reducers:{
        getHardSkills: (state, action)=>{
            state.hardSkills =action.payload;
        }
    }
});

export const {getHardSkills} = hardSkillsSlice.actions;
export default hardSkillsSlice.reducer;