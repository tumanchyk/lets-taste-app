import React from 'react';
import { StyledLink, HeaderEl, Nav, Counter, Icon, Wrapper } from './Header.styled';
import logo from '../../imgs/icon.svg'
import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/orders/ordersSelector';

const Header: React.FC = () => { 
    const currentOrders = useSelector(selectOrders);
    return <HeaderEl>
        <Nav>
          <StyledLink to="/" end>
            <img src={logo} alt='logo' style={{width: '60px', marginRight: '15px'}}/>
            Let'sTaste
          </StyledLink>
            <StyledLink to="/cart">Shopping Cart
            <Wrapper>
              <Icon/>
              <Counter>{currentOrders.length}</Counter>
            </Wrapper>
          </StyledLink>
        </Nav>
    </HeaderEl>
}
 export default Header