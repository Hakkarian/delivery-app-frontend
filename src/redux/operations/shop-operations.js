const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchShops } = require("service/api");

exports.fetchShops = createAsyncThunk('shops/setShops', async (_, {rejectWithValue}) => {
    try {
        const result = await fetchShops();
        return result
    } catch ({response}) {
        rejectWithValue(response)
    }
})

