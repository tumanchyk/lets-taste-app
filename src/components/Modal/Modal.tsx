import { createPortal } from 'react-dom';
import React, { useContext } from 'react';
import { Context } from '../App';
import { Backdrop, ModalContainer, CloseBtn, HomeBtn, Title } from "./Modal.styled";
import orderImg from '../../assets/order.png'
const modalRoot = document.getElementById('modal-root')


const Modal: React.FC = () => {
    const {setIsModalOpen} = useContext(Context)

    return createPortal(<Backdrop>
        <ModalContainer>
            <CloseBtn onClick={() => setIsModalOpen(false)} />
            <Title>Your order has been successfully placed</Title>
            <img src={orderImg} width={200} alt='successed order'/>
            <HomeBtn to={'/'} onClick={() => setIsModalOpen(false)}>Go to home page</HomeBtn>
        </ModalContainer>
    </Backdrop>, modalRoot)
}
export default Modal
