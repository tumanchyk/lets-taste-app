import { useState, useEffect } from "react"
import { CardWrapper, InfoWrapper, ImgWrapper, Name, Button, Price, Img, Container, Counter, Value, CountBtn } from "./ProductCard.styled"


const ProductCard = ({ dish, ordered }) => {
  const [quantity, setQuantity] = useState(0);
  const [active, setActive] = useState(false);
  const { orderedDishes, setOrderedDishes } = ordered;

  useEffect(() => {
    const orderedDish = orderedDishes.find((order) => order.id === dish.id);
    if (orderedDish) {
      setQuantity(orderedDish.quantity);
    }
  }, [orderedDishes, dish.id]);


  useEffect(() => {
    if (quantity === 0) {
      setActive(false);
      const updatedDishes = orderedDishes.filter((order) => order.id !== dish.id);
      setOrderedDishes(updatedDishes);
    }
  }, [quantity, dish.id]);

  const onBtnAdd = () => {
    setActive(true);
    setQuantity(1)
    const order = { ...dish, quantity: 1 };
    setOrderedDishes([...orderedDishes, order]);
  };

  const onChangeBtn = (value) => {
    const newQuantity = quantity + (value === '-' ? -1 : 1);
    setQuantity(newQuantity);
    
    const updatedDishes = orderedDishes.map((order) =>
    order.id === dish.id ? { ...order, quantity: newQuantity } : order
    ).filter(newOrder => newOrder.quantity > 0)

    if (updatedDishes.length === 0) {
      window.localStorage.removeItem('OrderedDishes')
      setOrderedDishes([])
    } else {
      setOrderedDishes(updatedDishes)
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

export default ProductCard;