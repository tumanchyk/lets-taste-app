import { useContext } from 'react';
import { MenuContainer, MenuItem, MenuList, MenuTitle } from "./ShopMenu.styled"
import { Context } from '../../App';

const ShopMenu = ({list}) => {
  const {rest, setRest} = useContext(Context)
  const handleBtn = (item) => {
    setRest(item)
  }

  return <MenuContainer>
    <MenuTitle>Restoraunts</MenuTitle>
    <MenuList>
      {list.map(item => <MenuItem key={item.id} onClick={()=> handleBtn(item)} isActive={rest.id === item.id}>{item.restaurant}</MenuItem>)}
    </MenuList>
    </MenuContainer>
}
  export default ShopMenu