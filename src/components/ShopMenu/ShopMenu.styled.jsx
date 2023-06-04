import styled from "@emotion/styled"

const MenuContainer = styled.div`
position: fixed;
z-index: 11;
width: 350px;
background-color: var(--secondary-bgc);
padding: 30px 20px;
border-radius: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const MenuList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`
const MenuItem = styled.li`
width: 100%;
padding: 15px 0; 
display: flex;
font-weight: 500;
font-size: ${props => props.isActive ? '24px' : '22px'};
align-items: center;
justify-content: center;
color: ${props => props.isActive ? 'var(--accent-color)' : 'ar(--text-color)' };
&:hover{
    color: var(--accent-color);
    font-size: 24px;
}
`
const MenuTitle = styled.h2`
margin-bottom: 30px;
font-size: 24px;
text-align: center;
color: var(--text-color)
`
export {MenuContainer, MenuItem, MenuList, MenuTitle}