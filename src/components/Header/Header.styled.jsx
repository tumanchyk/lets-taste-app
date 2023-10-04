import styled from "@emotion/styled";
import { NavLink} from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { mediaQueries } from "../../helpers/mediaQueries";


const HeaderEl = styled.header`
width: 100%;
box-shadow: rgba(100, 100, 100, 0.15) 0px 7px 26px 0px;
background-color:  var(--header-color);
position: fixed;
left: 0;
top: 0;
z-index: 10;
`
const Nav = styled.nav`
display: flex;
align-items: center;
margin: 0 auto;
padding: 20px 20px;
@media (min-width: ${mediaQueries.tablet}) {
	width: 768px;
}
@media (min-width: ${mediaQueries.desktop}) {
    width: 1260px;
}
`

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--grey-color);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  &:not(:last-child){
    margin-right: 15px;
  }
  &.active {
    color: #fff;
    }
  & img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  & p{
    display: none;
  }
  @media (min-width: ${mediaQueries.tablet}) {
    font-size: 22px;
    & img{
    width: 60px;
    height: 60px;
    margin-right: 15px;

  }
  & p{
    display: block;
  }
  &:not(:last-child){
    margin-right: 30px;
  }
}
`;
const Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-left: 9px;
`
const AdditionalWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
`
const Icon = styled(BsFillCartFill)`
width: 30px;
height: 30px;
fill: #fff;
transform: translate(-2px, 1px);
@media (min-width: ${mediaQueries.tablet}) {
    width: 40px;
    height: 40px;

}
`
const Counter = styled.span`
position: absolute;
color: #000;
font-size: 15px;
font-weight: 400;
@media (min-width: ${mediaQueries.tablet}) {
    font-size: 18px;
}
`
const LocationIcon = styled(FaLocationDot)`
width: 25px;
height: 25px;
fill: #fff;
transform: translate(-2px);
margin-right: 12px;
@media (min-width: ${mediaQueries.tablet}) {
    width: 30px;
    height: 30px;

}
`
const LocationWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 9px;
color: #fff;
font-size: 15px;
font-weight: 600;
@media (min-width: ${mediaQueries.tablet}) {
  margin-left: 12px;
  font-size: 20px;
}

`

export {StyledLink, HeaderEl, Nav, Counter, Icon, Wrapper, AdditionalWrapper, LocationIcon, LocationWrapper}