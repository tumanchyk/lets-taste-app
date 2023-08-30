import React from 'react';
import { useSelector } from 'react-redux';
import DishCard from '../DishCard/DishCard'
import { List } from './DishList.styled';
import { selectCurrentRestaurants } from '../../redux/restaurants/restaurantsSelectors';
import { Dish } from '../../ts/types';

const DishList: React.FC = () => {
  const currentRestaurant = useSelector(selectCurrentRestaurants)

    return <List>
        {currentRestaurant && currentRestaurant?.dishes?.map((item: Dish) => <DishCard dish={item} key={item.id} />)}
    </List>
}
export default DishList