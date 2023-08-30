import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWrapper, InfoWrapper, ImgWrapper, Name, Button, Price, Img, Container, Counter, Value, CountBtn } from "./DishCard.styled"
import { selectOrders } from "../../redux/orders/ordersSelector";
import { addOrders, setOrders } from "../../redux/orders/ordersSlice";
import { Order, DishCardProps, Operator } from "../../ts/types";

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const orderedDish = orders.find((order: Order) => order.id === dish.id);
    if (orderedDish) {
      setQuantity(orderedDish.quantity);
    }
  }, [orders, dish.id]);


  useEffect(() => {
    if (quantity === 0) {
      setActive(false);
      const updatedDishes = orders.filter((order: Order) => order.id !== dish.id);
      dispatch(setOrders(updatedDishes));
    }
  }, [quantity, dish.id]);

  const onBtnAdd = () => {
    setActive(true);
    setQuantity(1)
    const order = { ...dish, quantity: 1 };
    dispatch(addOrders(order))
  };

  const onChangeBtn = (value: Operator) => {
    const newQuantity = quantity + (value === '-' ? -1 : 1);
    setQuantity(newQuantity);
    
    const updatedDishes = orders.map((order: Order) =>
    order.id === dish.id ? { ...order, quantity: newQuantity } : order
    ).filter((newOrder: Order) => newOrder.quantity > 0)

    if (updatedDishes.length === 0) {
      window.localStorage.removeItem('OrderedDishes')
      dispatch(setOrders([]))
    } else {
      dispatch(setOrders(updatedDishes))
    }
  };

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={dish.image} alt={dish.name} />
      </ImgWrapper>
      <InfoWrapper>
        <Name>{dish.name}</Name>
        <Container>
          <Price>Price: {dish.price}$</Price>
          {active || quantity >= 1 ? (
            <Counter>
              <CountBtn onClick={() => onChangeBtn('-')}>-</CountBtn>
              <Value>{quantity}</Value>
              <CountBtn onClick={() => onChangeBtn('+')}>+</CountBtn>
            </Counter>
          ) : (
            <Button onClick={onBtnAdd}>Add to cart</Button>
          )}
        </Container>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default DishCard;