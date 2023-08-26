import { Container } from './Home.styled'
import ShopMenu from '../../components/ShopMenu/ShopMenu'
import ProductList from '../../components/ProductList/ProductList'
import { products } from '../../products';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
    useEffect(() => {
        
    })
    return <Container>
        <ShopMenu list={products} />
        <ProductList />
    </Container>
}

export default Home
