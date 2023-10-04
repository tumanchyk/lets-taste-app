import styled from "@emotion/styled"
import { mediaQueries } from "../../helpers/mediaQueries";

const MenuContainer = styled.div`
width: 100%;
background-color: var(--secondary-bgc);
padding: 25px 10px;
border-radius: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
overflow: hidden;
margin-bottom: 30px;
@media (min-width: ${mediaQueries.tablet}) {
	z-index: 5;
    width: 240px;
    background-color: var(--secondary-bgc);
    padding: 30px 20px 15px 20px;
    margin-bottom: 0px;

}
@media (min-width: ${mediaQueries.desktop}) {
	z-index: 5;
    width: 350px;
    background-color: var(--secondary-bgc);
    padding: 30px 20px 15px 20px;
    margin-bottom: 0px;

}
`
const MenuList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
@media (min-width: ${mediaQueries.tablet}) {
	flex-direction: column;

}
`
const MenuItem = styled.li`
padding: 0px 15px; 
display: flex;
white-space: nowrap;
font-weight: 500;
font-size: ${props => props.isActive ? '18px' : '16px'};
align-items: center;
justify-content: center;
color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--text-color)' };
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover{
    color: var(--accent-color);
    font-size: 18px;
}
@media (min-width: ${mediaQueries.tablet}) {
	width: 100%;
padding: 15px 0; 
display: flex;
font-weight: 500;
font-size: ${props => props.isActive ? '24px' : '22px'};
&:hover{
    color: var(--accent-color);
    font-size: 24px;
}
}
`
const MenuTitle = styled.h2`
display: none;
margin-bottom: 30px;
font-size: 24px;
text-align: center;
color: var(--text-color);
@media (min-width: ${mediaQueries.tablet}) {
	display: block;
}
`
export {MenuContainer, MenuItem, MenuList, MenuTitle}