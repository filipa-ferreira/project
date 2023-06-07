import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPortfolio = createAsyncThunk(
	'[Portfolio] getPortfolio',
	async () =>
	  await fetch('http://localhost:4002/api/data')
		.then((resp) => resp.json())
		.then((data) => data.portfolio)
  );

const portfolioSlice = createSlice({
    name: '[Portfolio] portfolio',
    initialState: {
		portfolio: [],
		loading: false,
		error: false,
	},
    reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPortfolio.pending, (state) => {
				state.loading = true;
			})
			.addCase(getPortfolio.fulfilled, (state, action) => {
				state.loading = false;
				state.portfolio = action.payload;
			})
			.addCase(getPortfolio.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});


export default portfolioSlice.reducer;