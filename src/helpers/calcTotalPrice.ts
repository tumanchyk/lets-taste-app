import { Orders } from "../ts/types";
export const calcTotalPrice = (orders: Orders): number => {
    const totalPrice = orders.reduce((total: number, order) => {
      if (order.quantity === 1) {
        return total + order.price
      }
      return total + (order.quantity * order.price)
    }, 0);
    return totalPrice
}