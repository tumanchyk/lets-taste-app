import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`
export const BackLink = styled(Link)`
display: flex;
color: #808080;
font-size: 18px;
align-items: center;
width: 100%;
margin-bottom: 35px;
    &:hover{
    color: #000;
    }
`

export const ArrowIcon = styled(BsArrowLeft)`
color: inherit;
width: 20px;
height: 20px;
margin-right: 10px;
`