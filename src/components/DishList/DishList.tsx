import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../DishCard/DishCard'
import { List } from './DishList.styled';
import { selectCurrentRestaurants } from '../../redux/restaurants/restaurantsSelectors';
import { Dish } from '../../ts/types';
import { addOrders } from '../../redux/orders/ordersSlice';
import { selectOrders } from '../../redux/orders/ordersSelector';

const DishList: React.FC = () => {
  const currentRestaurant = useSelector(selectCurrentRestaurants);
  const currentOrders = useSelector(selectOrders);
  const [orderedDishes, setOrderedDishes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const storedDishes = JSON.parse(window.localStorage.getItem('OrderedDishes')) || [];
    dispatch(addOrders(storedDishes))
  }, []);
    
  useEffect(() => {
      if (orderedDishes.length) {
        window.localStorage.setItem('OrderedDishes', JSON.stringify(orderedDishes));
    }
  }, [orderedDishes]);


    return <List>
        {currentRestaurant && currentRestaurant?.dishes?.map((item: Dish) => <DishCard ordered={{orderedDishes, setOrderedDishes}} dish={item} key={item.id} />)}
    </List>
}
export default DishList