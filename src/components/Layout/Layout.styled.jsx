import styled from "@emotion/styled";
import { NavLink} from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";


const Header = styled.header`
width: 100%;
padding: 20px 0;
box-shadow: rgba(100, 100, 100, 0.15) 0px 7px 26px 0px;
background-color:  var(--header-color);
position: fixed;
left: 0;
top: 0;
z-index: 10;
`
const Nav = styled.nav`
width: 1240px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
`
const Container = styled.main`
width: 1240px;
padding: 50px 0;
margin: 0 auto;
margin-top: 100px;`

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--grey-color);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
  &:not(:last-child){
    margin-right: 30px;
  }
  &.active {
    color: #fff;
    }
`;
const Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-left: 12px;
`
const Icon = styled(BsFillCartFill)`
width: 40px;
height: 40px;
fill: #fff;
transform: translate(-2px);
`
const Counter = styled.span`
position: absolute;
color: #000;
font-size: 18px;
font-weight: 400;
`



export {StyledLink, Container, Header, Nav, Counter, Icon, Wrapper}
