import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../types";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface InitialState {
  cart: ProductData[];
  wishList: ProductData[];
  UserInfo: UserInfo | null;
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
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    resetCart: (state) => {
      state.cart = [];
    },

    addToWishList: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      state.wishList.push(action.payload);
    },
    resetWishList: (state) => {
      state.UserInfo = null;
    },

    addUser: (state, action) => {
      state.UserInfo = action.payload
    },
    removeUser: (state) => {
      state.UserInfo = null
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishList,
  resetCart,
  resetWishList,
  increaseQuantity,
  decreaseQuantity,
  addUser, 
  removeUser
} = shoppersSlice.actions;
export default shoppersSlice.reducer;
