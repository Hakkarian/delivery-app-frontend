import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addToCart: (state, { payload }) => {
          const { id, name, price, preview } = payload;
          const existingItem = state.find((item) => {
          return item.id === id
      })
          if (existingItem) {
              existingItem.quantity++;
              localStorage.setItem("cart", JSON.stringify(state));
          } else {
              state.push({ id, name, price, quantity: 1, preview })
              localStorage.setItem('cart', JSON.stringify(state))
          }
      },
      removeFromCart: (state, { payload }) => {
          const { id } = payload;
          const existingItem = state.find((item) => item.id === id);
          if (existingItem.quantity > 1) {
              existingItem.quantity--;
              localStorage.setItem("cart", JSON.stringify(state));
          } else {
              const existingIndex = state.findIndex((item) => item.id === id);
              state.splice(existingIndex, 1);
              localStorage.setItem("cart", JSON.stringify(state));
          }
      }
      }
    },
);

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
