import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    }
  }
});

export const { updateName, updateEmail, updateMessage } = formSlice.actions;
export default formSlice.reducer;
