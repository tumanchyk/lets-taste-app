import { useEffect, useState, useContext } from "react";
import { Context } from "../../App";
import { Container } from "./ShoppingCart.styled"
import OrderList from "../../components/OrderList/OrderList"
import OrderForm from "../../components/OrderForm/OrderForm"
import NoOrders from "../../components/NoOrders/NoOrders";
const Cart = () => {
  const [orderedDishes, setOrderedDishes] = useState([]);
  const { setTotalPrice, setCount } = useContext(Context)

  useEffect(() => {
    const storedDishes = JSON.parse(window.localStorage.getItem('OrderedDishes')) || [];
    setOrderedDishes(storedDishes);
  
  }, []);

    
  useEffect(() => {
      if (orderedDishes.length) {
        window.localStorage.setItem('OrderedDishes', JSON.stringify(orderedDishes));
      }
      setCount(orderedDishes.length);

     const totalPrice = orderedDishes.reduce((total, order) => {
      if (order.quantity === 1) {
        return total + order.price
      }
      return total + (order.quantity * order.price)
      }, 0);
    setTotalPrice(totalPrice)
  }, [orderedDishes]);


  const deleteOrder = (id) => {
    const newOrderList = orderedDishes.filter(item => item.id !== id)
    if (newOrderList.length === 0) {
        window.localStorage.removeItem('OrderedDishes');
      setOrderedDishes([])
    } else {
        setOrderedDishes(newOrderList)
      }
  }

  const onChangeBtn = (value, id) => {
    const updatedOrder = orderedDishes.map(order => order.id === id
      ? { ...order, quantity: order.quantity + (value === '-' ? -1 : 1)}
      : order).filter(newOrder => newOrder.quantity > 0)
    if (updatedOrder.length === 0) {
      window.localStorage.removeItem('OrderedDishes')
      setOrderedDishes([])
    } else {
      setOrderedDishes(updatedOrder)
    }
    }


  return <Container>
        {orderedDishes.length >= 1
        ? <><OrderForm />
        <OrderList list={orderedDishes} onDelete={deleteOrder} onCounterBtn={onChangeBtn}/> </>
        : <NoOrders/>
        }
    </Container>
}

export default Cart