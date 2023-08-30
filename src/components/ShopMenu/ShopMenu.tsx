import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Restaurant } from '../../ts/types';
import { MenuContainer, MenuItem, MenuList, MenuTitle } from "./ShopMenu.styled"
import { selectCurrentRestaurants, selectRestaurants } from '../../redux/restaurants/restaurantsSelectors';

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
