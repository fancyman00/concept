import { configureStore } from '@reduxjs/toolkit'
import { basketSlice } from "../../entities/basket/model/slice.ts";

const appStore = configureStore({
  reducer: {
    basket: basketSlice.reducer
  },
})
export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore