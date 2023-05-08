import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    
  },
  reducers: {
    toggleSaliente: (state, action) => {
      state.letras[action.payload].saliente = true;
    },
  },
});

export const { toggleSaliente } = wordSlice.actions;
export default wordSlice.reducer;
