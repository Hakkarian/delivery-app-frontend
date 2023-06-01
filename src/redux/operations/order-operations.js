const { createAsyncThunk } = require("@reduxjs/toolkit");
const { submitOrder } = require("service/api");

exports.submitOrder = createAsyncThunk(
  "products/setProducts",
  async (data, { rejectWithValue }) => {
      try {
      const result = await submitOrder(data);
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
