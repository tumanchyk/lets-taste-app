import React, {useContext, Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../App';
import { StyledLink, Container, Header, Nav, Counter, Icon, Wrapper} from './Layout.styled';
import logo from '../../../public/icon.svg';
import Modal from '../Modal/Modal';

const Layout: React.FC = () => {
  const { count, isModalOpen} = useContext(Context)
    return <>
    <Header>
        <Nav>
          <StyledLink to="/" end>
            <img src={logo} alt='logo' style={{width: '60px', marginRight: '15px'}}/>
            Let'sTaste
          </StyledLink>
            <StyledLink to="/cart">Shopping Card
            <Wrapper>
              <Icon/>
              <Counter>{count}</Counter>
            </Wrapper>
          </StyledLink>
        </Nav>
    </Header>
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
      </Container>
      {isModalOpen && <Modal/>}
    </> 
}
 export default Layout