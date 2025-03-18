import {createSlice} from '@reduxjs/toolkit';

const WishListSlice = createSlice({
    name : 'wishlist',
    initialState :{
        data : []
    },
    reducers : {
        addtowishlist(state,action){
            
            let tempData = state.data
            let isExist = false
            tempData.map((item)=>{
                if(item.id === action.payload.id){
                    isExist = true
                }
            })
            if (!isExist){
                tempData.push(action.payload)
            }
            
            state.data = tempData;
        },

        removefromwishlist(state,action){
            state.data = state.data.filter((item)=>item.id !== action.payload.id)
        }
    }
    
})
export const {addtowishlist,removefromwishlist} = WishListSlice.actions
export default WishListSlice.reducer