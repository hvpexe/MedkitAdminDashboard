import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrdersContent = createAsyncThunk(
  "/orders/content",
  async () => {
    const response = await axios.get(
      "api/Order",
      {}
    );
    return response;
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    isLoading: false,
    orders: [],
  },
  reducers: {
    addNewOrder: (state, action) => {
      let { newOrderObj } = action.payload;
      state.orders = [...state.orders, newOrderObj];
    },

    deleteOrder: (state, action) => {
      let { index } = action.payload;
      state.orders.splice(index, 1);
    },
  },

  extraReducers: {
    [getOrdersContent.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrdersContent.fulfilled]: (state, action) => {
      state.orders = action.payload.data;
      state.isLoading = false;
    },
    [getOrdersContent.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addNewOrder, deleteOrder } = ordersSlice.actions

export default ordersSlice.reducer;
