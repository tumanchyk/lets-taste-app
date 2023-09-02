import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const RestLink = styled(Link)`
padding: 25px;
margin: 0 auto;
margin-top: 30px;
color: #fff;
font-size: 22px;
font-weight: 500;
border-radius: 50px;
background-color:  var(--header-color);
:hover{
    background-color: var(--accent-color);

}
`
export const ImgBg = styled.img`
display: block;
margin: 0 auto;
width: 330px;
height: auto;`