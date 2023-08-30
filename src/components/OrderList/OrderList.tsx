import React from "react";
import { useSelector } from "react-redux";
import OrderCard from '../OrderCart/OrderCard';
import { calcTotalPrice } from "../../helpers/calcTotalPrice";
import { TotalPrice } from '../OrderCart/OrderCart.styled';
import { Wrapper } from '../OrderForm/OrderForm.styled';
import { Title } from '../commonStyleElem/commonStyles'
import { selectOrders } from "../../redux/orders/ordersSelector";
import { Order } from "../../ts/types";

const OrderList: React.FC = () => {
  const orders = useSelector(selectOrders);
  const totalPrice = calcTotalPrice(orders);
    
  return <Wrapper>
      <Title>Your order</Title>
      <ul>
          {orders.map((order: Order) => <OrderCard dish={order} key={order.id}/>)}
      </ul>
      <TotalPrice>Total price: {totalPrice}$</TotalPrice>
  </Wrapper>
}
export default OrderList