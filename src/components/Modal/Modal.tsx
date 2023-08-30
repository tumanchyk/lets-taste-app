import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import orderImg from '../../images/order.png';
import { Backdrop, ModalContainer, CloseBtn, HomeBtn, Title } from "./Modal.styled";
import { openModal } from '../../redux/orders/ordersSlice';
const modalRoot = document.getElementById('modal-root') as HTMLElement;


const Modal: React.FC = () => {
    const dispatch = useDispatch()

    return createPortal(<Backdrop>
        <ModalContainer>
            <CloseBtn onClick={() => dispatch(openModal(false))} />
            <Title>Your order has been successfully placed</Title>
            <img src={orderImg} width={200} alt='successed order'/>
            <HomeBtn to={'/'} onClick={() => dispatch(openModal(false))}>Go to home page</HomeBtn>
        </ModalContainer>
    </Backdrop>, modalRoot)
}
export default Modal
