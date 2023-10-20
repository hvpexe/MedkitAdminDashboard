import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const getOriginalMedicinesContent = createAsyncThunk(
	"/originalMedicines/content",
	async () => {
		const response = await axios.get("api/OriginalMedicine", {});
		// console.log(response.data);
		return response;
	}
);

export const addOriginalMedicines = createAsyncThunk(
	"/originalMedicines/add",
	async (newMed) => {
		let data = JSON.stringify(newMed.newOriginalMedicineObj);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await axios.post("api/OriginalMedicine", data, config);
		console.log("data", response);
		return response;
	}
);

export const deleteOriginalMedicines = createAsyncThunk(
	"/originalMedicines/delete",
	async (id) => {
		await axios.delete("api/OriginalMedicine/" + id, {});
		console.log("id lan dau", id);
		return id;
	}
);

export const originalMedicinesSlice = createSlice({
	name: "originalMedicines",
	initialState: {
		isLoading: false,
		originalMedicines: [],
	},
	reducers: {
		addNewOriginalMedicine: (state, action) => {
			let { newOriginalMedicineObj } = action.payload;
			state.originalMedicines = [
				...state.originalMedicines,
				newOriginalMedicineObj,
			];
		},

		// deleteOriginalMedicine: (state, action) => {
		// 	let { index } = action.payload;
		// 	state.originalMedicines.splice(index, 1);
		// },
	},

	extraReducers: {
		[getOriginalMedicinesContent.pending]: (state) => {
			state.isLoading = true;
		},
		[getOriginalMedicinesContent.fulfilled]: (state, action) => {
			state.originalMedicines = action.payload.data;
			state.isLoading = false;
		},
		[getOriginalMedicinesContent.rejected]: (state) => {
			state.isLoading = false;
		},
		[addOriginalMedicines.pending]: (state) => {
			state.isLoading = false;
		},
		[addOriginalMedicines.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.originalMedicines.unshift(action.payload.data);
		},
		[addOriginalMedicines.rejected]: (state) => {
			state.isLoading = false;
		},
		[deleteOriginalMedicines.pending]: (state) => {
			state.isLoading = true;
		},
		[deleteOriginalMedicines.fulfilled]: (state, action) => {
			if (action.payload != null) {
				const currentMed = state.originalMedicines.filter(
					(med) => med.id !== action.payload
				);
				state.originalMedicines = currentMed
			}	
			state.isLoading = false;
		},

		[deleteOriginalMedicines.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const { addNewOriginalMedicine } = originalMedicinesSlice.actions;

export default originalMedicinesSlice.reducer;
