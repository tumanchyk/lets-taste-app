import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { restaurantsReducer } from './restaurants/restaurantsSlice';
import { ordersReducer } from './orders/ordersSlice';

const reducers = combineReducers({
	restaurants: restaurantsReducer,
	orders: ordersReducer
});

export const store = configureStore({
	reducer: reducers,
});