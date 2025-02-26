import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addtocart(state, action) {
       
      let tempdata = state.data;
      
        tempdata.push(action.payload);
      state.data = tempdata;
     
    },
  },
});
export const {addtocart} = CartSlice.actions;
export default CartSlice.reducer;
