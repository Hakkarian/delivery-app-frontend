const { createSlice } = require("@reduxjs/toolkit")
const { submitOrder } = require("redux/operations/order-operations")

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    totalPrice: 0,
    items: [],
    isLoading: false,
    error: null
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(submitOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
          .addCase(submitOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
          state.name = payload.name;
          state.email = payload.email;
          state.phone = payload.phone;
          state.address = payload.address;
          state.totalPrice = payload.totalPrice;
          state.items = payload.items;
      }),
});

module.exports = orderSlice.reducer;