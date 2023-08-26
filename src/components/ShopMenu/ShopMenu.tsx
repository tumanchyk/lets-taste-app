import React, { useContext } from 'react';
import { MenuContainer, MenuItem, MenuList, MenuTitle } from "./ShopMenu.styled"
import { Context } from '../App';

const ShopMenu: React.FC = ({list}) => {
  const {rest, setRest} = useContext(Context)
  const onRestClick = (item) => {
    setRest(item)
  }

  return <MenuContainer>
    <MenuTitle>Restaurants</MenuTitle>
    <MenuList>
      {list.map(item => <MenuItem key={item.id} onClick={()=> onRestClick(item)} isActive={rest.id === item.id}>{item.restaurant}</MenuItem>)}
    </MenuList>
    </MenuContainer>
}
export default ShopMenu
