import React from 'react';
import { useSelector } from 'react-redux';
import { StyledLink, HeaderEl, Nav, Counter, Icon, Wrapper, LocationIcon, AdditionalWrapper, LocationWrapper } from './Header.styled';
import logo from '../../images/icon.svg';
import { selectOrders, selectLocation } from '../../redux/orders/ordersSelector';

const Header: React.FC = () => { 
  const currentOrders = useSelector(selectOrders);
  const city = useSelector(selectLocation)
    return <HeaderEl>
        <Nav>
          <StyledLink to="/" end>
            <img src={logo} alt='logo' style={{width: '60px', marginRight: '15px'}}/>
            Let'sTaste
        </StyledLink>
        <AdditionalWrapper>
          <StyledLink to="/cart">Cart
            <Wrapper>
              <Icon/>
              <Counter>{currentOrders.length}</Counter>
            </Wrapper>
          </StyledLink>
        <LocationWrapper>
          <LocationIcon />
          {city ? city : null}  
        </LocationWrapper>
            </AdditionalWrapper>
        </Nav>
    </HeaderEl>
}
 export default Header