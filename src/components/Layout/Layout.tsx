import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';

const Layout: React.FC = () => {
    return <>
    <Header/>
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
      </Container>
      {/* {isModalOpen && <Modal/>} */}
    </> 
}
 export default Layout