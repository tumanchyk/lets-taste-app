import React, {useRef} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, BackLink, ArrowIcon } from "./ShoppingCart.styled"
import OrderList from "../../components/OrderList/OrderList"
import OrderForm from "../../components/OrderForm/OrderForm"
import NoOrders from "../../components/NoOrders/NoOrders";
import { selectOrders } from "../../redux/orders/ordersSelector";

const Cart: React.FC = () => {
  const orders = useSelector(selectOrders);
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? "/rest/1234");

  return <>
      <BackLink to={locationRef.current}><ArrowIcon/>continue to order</BackLink>
      <Container>
          {orders.length >= 1
          ? <><OrderForm />
          <OrderList /> </>
          : <NoOrders/>
          }
      </Container>
  </>
}

export default Cart