import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getHardSkills = createAsyncThunk(
    '[HardSkills] getHardSkills',
  async () => 
    fetch('http://localhost:4002/api/data')
    .then((resp) => resp.json())
    .then((data) => data.hardSkills)
);

const hardSkillsSlice = createSlice({
  name: '[HardSkills] hardSkills',
  initialState: {
    hardSkills: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHardSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHardSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.hardSkills = action.payload;
      })
      .addCase(getHardSkills.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const {getHardSkills} = hardSkillsSlice.actions;
export default hardSkillsSlice.reducer;