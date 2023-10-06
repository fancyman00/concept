import { configureStore } from '@reduxjs/toolkit'
import { basketSlice } from "../../entities/basket/model/slice.ts";
import { loadBasket } from "../../entities/basket/model/localStorage.ts";
import { productApi } from "../../entities/product/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const appStore = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,

  },
  preloadedState: {
    basket: {
      products:  loadBasket()
    }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
setupListeners(appStore.dispatch)


export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore
