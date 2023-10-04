import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Restaurant } from '../../ts/types';
import { MenuContainer, MenuItem, MenuList, MenuTitle } from "./ShopMenu.styled"
import { selectCurrentRestaurants, selectRestaurants } from '../../redux/restaurants/restaurantsSelectors';

const ShopMenu: React.FC = () => {
  const restaurantList = useSelector(selectRestaurants);
  const currentRest = useSelector(selectCurrentRestaurants);
    const containerRef = useRef(null);

  const handleScroll = (event, index) => {
    const container = containerRef.current;
    const category = container.children[index];

    const containerWidth = container.offsetWidth;
    const categoryWidth = category.offsetWidth;

    const scrollAmount =
      category.offsetLeft - (containerWidth - categoryWidth) / 2;

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return <MenuContainer>
    <MenuTitle>Restaurants</MenuTitle>
    <MenuList ref={containerRef}>
      {restaurantList.map((item: Restaurant, index) => <MenuItem key={item.id} isActive={currentRest.id === item.id} onClick={event => handleScroll(event, index)} ><Link to={`/rest/${item.id}`} style={{color: 'inherit'}}>{item.restaurant}</Link></MenuItem>)}
    </MenuList>
    </MenuContainer>
}
export default ShopMenu
