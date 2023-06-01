import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "redux/operations/product-operations";
import { fetchShops } from "redux/operations/shop-operations";

const initialState = {
  shops: [],
  prods: [],
  isLoading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShops.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchShops.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shops = payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
  },
});

export const { setShops } = shopsSlice.actions;

export default shopsSlice.reducer;
