import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../redux/slices/ProductSlice'
import CartReducer from '../redux/slices/CartSlice'

export const store = configureStore({
    reducer :{
        product : ProductReducer,
        cart : CartReducer
    }
})