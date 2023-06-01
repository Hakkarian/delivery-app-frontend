const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchProducts, fetchProductsById } = require("service/api");

exports.fetchProducts = createAsyncThunk(
  "products/setProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchProducts();
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);

exports.fetchProductById = createAsyncThunk("products/getById", async (shopId, { rejectWithValue }) => {
    try {
      const result = await fetchProductsById(shopId);
      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
})
