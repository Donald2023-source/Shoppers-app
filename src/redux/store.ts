import { configureStore } from "@reduxjs/toolkit";
import shopperReducers from "./shoppersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, shopperReducers)

export const store = configureStore({
  reducer: {
    shoppers: persistedReducer,
  },
});

export const persistor = persistStore(store)
