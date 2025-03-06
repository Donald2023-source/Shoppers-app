import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favourite: [],
  userInfo: null,
};
export const shoppersSlice = createSlice({
  name: "shoppers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart } = shoppersSlice.actions;
export default shoppersSlice.reducer;
