import { configureStore } from '@reduxjs/toolkit'
import { basketSlice } from "../../entities/basket/model/slice.ts";
import { loadBasket } from "../../entities/basket/model/localStorage.ts";

const appStore = configureStore({
  reducer: {
    basket: basketSlice.reducer
  },
  preloadedState: {
    basket: {
      products:  loadBasket()
    }
  },
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore
