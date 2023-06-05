import { useState, useEffect, useContext } from 'react';
import { Context } from '../../App';
import ProductCard from './../ProductCard/ProductCard'
import { List } from './ProductList.styled';


const ProductList = () => {
  const [list, setList] = useState([])
  const [orderedDishes, setOrderedDishes] = useState([]);
  const {setCount, rest} = useContext(Context)

  useEffect(() => {
    const storedDishes = JSON.parse(window.localStorage.getItem('OrderedDishes')) || [];
    setOrderedDishes(storedDishes);
  }, []);

   useEffect(() => {
    setList(rest.dishes)
  }, [rest]);
    
  useEffect(() => {
      if (orderedDishes.length) {
        window.localStorage.setItem('OrderedDishes', JSON.stringify(orderedDishes));
    }
    setCount(orderedDishes.length)

  }, [orderedDishes]);


    return <List>
        {list && list.map(item => <ProductCard ordered={{orderedDishes, setOrderedDishes}} dish={item} key={item.id} />)}
    </List>
}
export default ProductList