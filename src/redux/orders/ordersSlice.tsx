import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orderInitialState } from '../../helpers/initialStates';
import { Order } from '../../ts/types';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: orderInitialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderList = action.payload;
      window.localStorage.setItem('OrderedDishes', JSON.stringify(state.orderList));

    },
    addOrders: (state, action: PayloadAction<Order>) => {
      state.orderList.push(action.payload);
      window.localStorage.setItem('OrderedDishes', JSON.stringify(state.orderList));

    },
    removeOrders: (state, action) => {
      const newOrderList = state.orderList.filter(({ id }) =>
        id !== action.payload)
      if (newOrderList.length === 0) {
        window.localStorage.removeItem('OrderedDishes');
        state.orderList = []
      } else {
        state.orderList = newOrderList
      }
    },
    openModal: (state, action) => {
      state.isDone = action.payload;
    },
    setLocation: (state, action) => {
      state.city = action.payload;
    },
  }  
})

export const { setOrders, addOrders, removeOrders, openModal, setLocation } = ordersSlice.actions;
 export const ordersReducer = ordersSlice.reducer