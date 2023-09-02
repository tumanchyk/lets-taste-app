import { RootState } from "../store";
export const selectOrders = (state: RootState) => state.orders.orderList;
export const selectOrderIsDone = (state: RootState) => state.orders.isDone;
export const selectLocation = (state: RootState) => state.orders.city;
