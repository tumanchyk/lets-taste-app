import styled from "@emotion/styled";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Backdrop = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease-in-out;
overflow: hidden;
z-index: 99;
`
const ModalContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 40px 30px;
width: 40%;
background-color: #fff;

`
const CloseBtn = styled(RxCross2)`
position: absolute;
top: 20px;
right: 20px;
width: 22px;
height: 22px;
cursor: pointer;
&:hover{
    color: tomato;
}
`
const HomeBtn = styled(Link)`
background-color: transparent;
border-radius: 30px;
border: 2px solid var(--accent-color);
margin-top: 30px;
padding: 9px 22px;
font-size: 20px;
cursor: pointer; 
color: var(--accent-color);
transition: all 300ms;
:hover{
    color: #fff;
    background-color: var(--accent-color);;
}
`
const Title = styled.p`
text-align: center;
font-size: 26px;
color: #000;
margin-bottom: 30px;
font-weight: 500;
`
export {Backdrop, ModalContainer, CloseBtn, HomeBtn, Title}