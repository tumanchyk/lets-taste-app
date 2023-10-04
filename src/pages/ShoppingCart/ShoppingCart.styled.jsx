import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { mediaQueries } from "../../helpers/mediaQueries";

export const BackLink = styled(Link)`
display: flex;
color: #808080;
font-size: 16px;
align-items: center;
width: 100%;
transform: translateY(20px);
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover{
    color: #000;
}
@media (min-width: ${mediaQueries.tablet}) {
font-size: 18px;
}
`

export const ArrowIcon = styled(BsArrowLeft)`
color: inherit;
width: 20px;
height: 20px;
margin-right: 10px;
`