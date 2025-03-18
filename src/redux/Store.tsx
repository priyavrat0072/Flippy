import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../redux/slices/ProductSlice'
import CartReducer from '../redux/slices/CartSlice'
import WishListSlice from '../redux/slices/WishListSlice'

export const store = configureStore({
    reducer :{
        product : ProductReducer,
        cart : CartReducer,
        wishlist : WishListSlice
    }
})