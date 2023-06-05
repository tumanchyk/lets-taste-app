import { Container } from './Home.styled'
import ShopMenu from '../../components/ShopMenu/ShopMenu'
import ProductList from '../../components/ProductList/ProductList'
import { products } from '../../products';
// import { useContext } from 'react';
// import { Context } from '../../App';
const Home = () => {
    // const {rest} = useContext(Context)

    return <Container>
        <ShopMenu list={products} />
        {/* <ProductList list={rest || products[0]} /> */}
        <ProductList />
    </Container>
}

export default Home