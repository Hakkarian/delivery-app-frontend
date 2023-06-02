import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';

import shopsReducer from './reducers/shop';
import cartReducer from './reducers/cart';
import orderReducer from "./reducers/order";
// import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
        cart: cartReducer,
        order: orderReducer
    },
      middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);