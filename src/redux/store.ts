import { configureStore } from "@reduxjs/toolkit";
import shopperReducers from "./shoppersSlice";
export const store = configureStore({
    reducer: {
        shoppers: shopperReducers,
    }
})