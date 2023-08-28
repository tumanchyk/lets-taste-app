import React from 'react';
import { Restaurant } from '../../ts/types';
import { MenuContainer, MenuItem, MenuList, MenuTitle } from "./ShopMenu.styled"
import { useSelector } from 'react-redux';
import { selectCurrentRestaurants, selectRestaurants } from '../../redux/restaurants/restaurantsSelectors';
import { Link } from 'react-router-dom';

const ShopMenu: React.FC = () => {
  const restaurantList = useSelector(selectRestaurants);
  const currentRest = useSelector(selectCurrentRestaurants);


  return <MenuContainer>
    <MenuTitle>Restaurants</MenuTitle>
    <MenuList>
      {restaurantList.map((item: Restaurant) => <MenuItem key={item.id} isActive={currentRest.id === item.id}><Link to={`/rest/${item.id}`} style={{color: 'inherit'}}>{item.restaurant}</Link></MenuItem>)}
    </MenuList>
    </MenuContainer>
}
export default ShopMenu
