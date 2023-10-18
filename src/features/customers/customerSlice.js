import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getCustomersContent = createAsyncThunk('/customers/content', async () => {
	const response = await axios.get('/api/User/pagination?pageIndex=1&pageSize=10', {})
    // console.log(response.data);
	return response;
})


export const customersSlice = createSlice({
    name: 'customers',
    initialState: {
        isLoading: false,
        customers : []
    },
    reducers: {


        addNewCustomer: (state, action) => {
            let {newcustomerObj} = action.payload
            state.customers = [...state.customers, newcustomerObj]
        },

        deleteCustomer: (state, action) => {
            let {index} = action.payload
            state.customers.splice(index, 1)
        }
    },

    extraReducers: {
		[getCustomersContent.pending]: state => {
			state.isLoading = true
		},
		[getCustomersContent.fulfilled]: (state, action) => {
			state.customers = action.payload.data
			state.isLoading = false
		},
		[getCustomersContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewCustomer, deleteCustomer } = customersSlice.actions

export default customersSlice.reducer