import { createSlice } from "@reduxjs/toolkit";

type basketItem = {
  productId: string,
  productCount: number
}

type basketStateType = {
  products: basketItem[]
}

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
    },
    removeProduct: (state, action) => {
      const product = state.products.find((item)=>item.productId == action.payload)
      product && product.productCount--
    },
    clearBasket: (state) => {
      state.products = []
    },
  }
})