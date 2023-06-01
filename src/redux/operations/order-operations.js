import { toast } from "react-hot-toast";

const { createAsyncThunk } = require("@reduxjs/toolkit");
const { submitOrdere } = require("service/api");

export const submitOrder = createAsyncThunk(
  "products/setProducts",
  async (data, { rejectWithValue }) => {
      try {
        const result = await submitOrdere(data);
        toast('Your order has been added succesfully!', {
        icon: '😊',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
