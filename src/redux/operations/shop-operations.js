const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchShopse } = require("service/api");

export const fetchShops = createAsyncThunk('shops/setShops', async (_, {rejectWithValue}) => {
    try {
        const result = await fetchShopse();
        return result
    } catch ({response}) {
        rejectWithValue(response)
    }
})

