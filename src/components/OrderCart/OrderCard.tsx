import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountBtn, Counter, Value } from "../DishCard/DishCard.styled";
import { CardWrapper, ImgWrapper, Img, OrderInfo, Text, Name, AddWrapper, Cross } from "./OrderCart.styled";
import { selectOrders } from '../../redux/orders/ordersSelector';
import { setOrders, removeOrders } from '../../redux/orders/ordersSlice';
import { OrderCardProps, Order, Operator } from "../../ts/types";

const OrderCard: React.FC<OrderCardProps> = ({ dish }) => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();

  const onChangeQntBtn = (value: Operator, id: string) => {
    const updatedOrder = orders.map((order: Order) => order.id === id
      ? { ...order, quantity: order.quantity + (value === '-' ? -1 : 1)}
      : order).filter((newOrder: Order) => newOrder.quantity > 0)
    
    if (updatedOrder.length === 0) {
      window.localStorage.removeItem('OrderedDishes')
      dispatch(setOrders([]))
    } else {
      dispatch(setOrders(updatedOrder))
    }
  }

  return <CardWrapper>
      <Cross onClick={() => dispatch(removeOrders(dish.id))}/>
      <ImgWrapper>
          <Img src={dish.image} alt={dish.name} />
      </ImgWrapper>
      <OrderInfo>
          <Name>{dish.name}</Name>
          <AddWrapper>
              <Text>Price: {dish.price}$</Text>
              <Counter>
                  <CountBtn onClick={() => onChangeQntBtn('-', dish.id)}>-</CountBtn>
                  <Value>{dish.quantity}</Value>
                  <CountBtn onClick={() => onChangeQntBtn('+', dish.id)}>+</CountBtn>
              </Counter>
          </AddWrapper>
      </OrderInfo>
  </CardWrapper>
}
export default OrderCard