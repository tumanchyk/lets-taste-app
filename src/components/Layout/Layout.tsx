import React, {Suspense} from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import { selectOrderIsDone } from '../../redux/orders/ordersSelector';

const Layout: React.FC = () => {
  const isDone = useSelector(selectOrderIsDone)

    return <>
    <Header/>
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
      </Container>
      {isDone && <Modal/>}
    </> 
}
 export default Layout