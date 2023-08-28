import { CountBtn, Counter, Value } from "../DishCard/DishCard.styled"
import { CardWrapper, ImgWrapper, Img, OrderInfo, Text, Name, AddWrapper, Cross } from "./OrderCart.styled"

const OrderCard: React.FC = ({ dish, onBtnDelete, onCounterBtn }) => {
    
   
    
    return <CardWrapper>
        <Cross onClick={() => onBtnDelete(dish.id)}/>
        <ImgWrapper>
            <Img src={dish.image} alt={dish.name} />
        </ImgWrapper>
        <OrderInfo>
            <Name>{dish.name}</Name>
            <AddWrapper>
                <Text>Price: {dish.price}$</Text>
                <Counter>
                    <CountBtn onClick={() => onCounterBtn('-', dish.id)}>-</CountBtn>
                    <Value>{dish.quantity}</Value>
                    <CountBtn onClick={() => onCounterBtn('+', dish.id)}>+</CountBtn>
                </Counter>
            </AddWrapper>
        </OrderInfo>
    </CardWrapper>
}
export default OrderCard