import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers:{
        addProducts(state,action){
            state.data = action.payload
        }
    }
    
})
export const {addProducts} = ProductsSlice.actions
export default ProductsSlice.reducer


