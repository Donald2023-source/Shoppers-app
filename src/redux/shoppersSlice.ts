import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../types";

interface UserInfo{
  id: string,
  name: string,
  email: string
}

interface InitialState {
  cart: ProductData[],
  wishList: ProductData[],
  UserInfo: UserInfo | null
}
const initialState: InitialState = {
  cart: [],
  wishList: [],
  UserInfo: null,
};
export const shoppersSlice = createSlice({
  name: "shoppers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find((item) => item._id === action.payload._id);
      if(existingProduct) {
        existingProduct.quantity +=1
      } else {
        state.cart.push(action.payload)
      }
      
    },
  },
});

export const { addToCart } = shoppersSlice.actions;
export default shoppersSlice.reducer;
