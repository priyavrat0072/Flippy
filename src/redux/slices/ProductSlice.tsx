import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers:{
        addProducts(state,action){
            // console.log('action.payload----------',action.payload)
            state.data = action.payload
        }
    }
    
})

export const {addProducts} = ProductsSlice.actions
export default ProductsSlice.reducer


