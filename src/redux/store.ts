import { configureStore } from "@reduxjs/toolkit";
import shopperReducers from "./shoppersSlice";
import { persistStore, persistReducer, WebStorage } from "redux-persist";
import storage from "redux-persist/lib/storage";

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined";

  // create dummy server

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, shopperReducers);

export const store = configureStore({
  reducer: {
    shoppers: persistedReducer,
  },
});

export const persistor = persistStore(store);
