import emptyCart from '../../assets/empty-cart.svg'
import { Title } from '../commonStyles'
import { Container, EmptyCartImg } from './NoOrders.styled'
const NoOrders = () => {
    return <Container>
        <Title>No orders in your card. Choose something yammy</Title>
    <EmptyCartImg src={emptyCart} alt="empty cart" />
    </Container>
}

export default NoOrders