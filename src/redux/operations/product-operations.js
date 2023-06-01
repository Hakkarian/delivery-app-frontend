const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchProductse, fetchProductsByIde } = require("service/api");

export const fetchProducts = createAsyncThunk(
  "products/setProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchProductse();
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);

export const fetchProductById = createAsyncThunk("products/getById", async (shopId, { rejectWithValue }) => {
    try {
      const result = await fetchProductsByIde(shopId);
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
})
