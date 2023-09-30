import { createSlice } from "@reduxjs/toolkit";
import { basketStateType } from "./types";
import { saveBasket } from "./localStorage.ts";


const initialState: basketStateType = {
  products: []
}
export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find((item)=>item.productId == action.payload)
      product ? product.productCount++ : state.products.push({productId: action.payload, productCount: 0})
      saveBasket(state.products)
    },
    removeProduct: (state, action) => {
      const product = state.products.find((item)=>item.productId == action.payload)
      product && product.productCount--
      saveBasket(state.products)
    },
    clearBasket: (state) => {
      state.products = []
      saveBasket(state.products)
    },
    setFromStorage: (state, action) => {
      state.products = action.payload
      saveBasket(state.products)
    },
  }
})