const { createAsyncThunk } = require("@reduxjs/toolkit");
const { submitOrdere } = require("service/api");

export const submitOrder = createAsyncThunk(
  "products/setProducts",
  async (data, { rejectWithValue }) => {
      try {
      const result = await submitOrdere(data);
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
