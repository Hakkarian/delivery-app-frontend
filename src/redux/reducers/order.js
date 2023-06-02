const { createSlice } = require("@reduxjs/toolkit")
const { submitOrder, findOrder } = require("redux/operations/order-operations")

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    totalPrice: 0,
    items: [],
    history: [],
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
      })
      .addCase(findOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(findOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.history = payload
      }),
});

module.exports = orderSlice.reducer;