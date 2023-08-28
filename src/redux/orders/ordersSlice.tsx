import { createSlice } from '@reduxjs/toolkit';


const initialState = {
      orderList: [],
    }


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
		addOrders: (state, action) => {
			state.orderList.push(action.payload);
        },
         removeOrders: (state, action) => { 
            state.orderList = state.orderList.filter(({id}) => 
            id !== action.payload)
        }
        
	}
})

export const { addOrders, removeOrders } = ordersSlice.actions;
 export const ordersReducer = ordersSlice.reducer