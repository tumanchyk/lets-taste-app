import React, { useContext } from "react";
import { Context } from "../App";
import OrderCard from '../OrderCart/OrderCard';
import { TotalPrice, Text, AddWrapper } from '../OrderCart/OrderCart.styled';
import { Wrapper } from '../OrderForm/OrderForm.styled';
import { Title } from '../commonStyleElem/commonStyles'
const OrderList: React.FC = ({list, onDelete, onCounterBtn}) => {
    const { totalPrice } = useContext(Context)
    
    
    return <Wrapper>
        <Title>Your order</Title>
        <ul>
            {list ? list.map((order) => <OrderCard dish={order} key={order.id} onBtnDelete={onDelete} onCounterBtn={onCounterBtn}/>) : null}
        </ul>
        <TotalPrice>Total price: {totalPrice}$</TotalPrice>
    </Wrapper>
}
export default OrderList