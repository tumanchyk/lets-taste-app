import styled from "@emotion/styled";
import { RxCross2 } from "react-icons/rx";
import { mediaQueries } from "../../helpers/mediaQueries";

const CardWrapper = styled.li`
position: relative;
display: flex;
height: 250px;
border-radius: 20px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
&:not(:last-child){
    margin-bottom: 15px;
}
`
const ImgWrapper = styled.div`
height: 100%;
width: 250px;
`
const Img = styled.img`
display: block;
height: 100%;
width: 100%;
object-fit: cover;
`
const OrderInfo = styled.div`
padding: 35px 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Text = styled.p`
font-size: 20px;
`
const Name = styled.h3`
color: var(--accent-color);
width: 260px;
font-size: 20px;
`

const AddWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Cross = styled(RxCross2)`
position: absolute;
top: 20px;
right: 20px;
width: 20px;
height: 20px;
cursor: pointer;
&:hover{
    color: tomato;
}
`
const TotalPrice = styled.p`
font-weight: 600;
font-size: 20px;
margin-top: 30px;
`
export {CardWrapper, ImgWrapper, Img, OrderInfo, Text, Name, AddWrapper, Cross, TotalPrice}