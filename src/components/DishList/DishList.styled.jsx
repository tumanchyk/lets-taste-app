import styled from "@emotion/styled";
import { mediaQueries } from "../../helpers/mediaQueries";
 
export const List = styled.ul`
width: 100%;
background-color: var(--secondary-bgc);
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center; 
border-radius: 20px;
padding: 20px 0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-left: auto;
@media (min-width: ${mediaQueries.tablet}) {
	width: 460px;
}
@media (min-width: ${mediaQueries.desktop}) {
	width: 850px;
}
`
