import React from 'react'
import emptyCart from '../../assets/empty-cart.svg'
import { Title } from '../commonStyleElem/commonStyles'
import { Container, EmptyCartImg } from './NoOrders.styled'
const NoOrders: React.FC = () => {
    return <Container>
        <Title>No orders in your cart. Choose something tasty</Title>
    <EmptyCartImg src={emptyCart} alt="empty cart" />
    </Container>
}

export default NoOrders
