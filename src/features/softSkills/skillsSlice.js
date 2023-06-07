import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSoftSkills = createAsyncThunk(
	'[SoftSkills] getSoftSkills',
	async () =>
	  await fetch('http://localhost:4002/api/data')
		.then((resp) => resp.json())
		.then((data) => data.softSkills)
  );

const softSkillsSlice = createSlice({
	name: '[SoftSkills] softSkills',
	initialState: {
		softSkills: [],
		loading: false,
		error: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSoftSkills.pending, (state) => {
				state.loading = true;
			})
			.addCase(getSoftSkills.fulfilled, (state, action) => {
				state.loading = false;
				state.softSkills = action.payload;
			})
			.addCase(getSoftSkills.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default softSkillsSlice.reducer;