import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addtocart(state, action) {
      let tempdata = state.data;
      let isExists = false
      tempdata.map((item)=>{
        if(item.id == action.payload.id){
          isExists = true
        }
      })
      if(!isExists){
        tempdata.push(action.payload)
      }
      
      state.data = tempdata;
    },
    removefromcart(state, action){
      state.data = state.data.filter((item)=>item.id !== action.payload.id)
    }
  },
});
export const {addtocart,removefromcart} = CartSlice.actions;
export default CartSlice.reducer;
