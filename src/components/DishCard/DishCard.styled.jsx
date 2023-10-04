import styled from "@emotion/styled";
import { mediaQueries } from "../../helpers/mediaQueries";

const CardWrapper = styled.li`
width: calc((100% - 40px)/2);
border-radius: 20px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
margin: 5px;

:hover img{
    transform: scale(1.05);
}
@media (min-width: ${mediaQueries.tablet}) {
	width: calc((100% - 40px)/2);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
@media (min-width: ${mediaQueries.desktop}) {
	width: 350px;
    height: auto;
    margin: 15px;

}
`

const ImgWrapper = styled.div`
width: 100%;
height: 190px;
overflow: hidden;
@media (min-width: ${mediaQueries.desktop}) {
	width: 100%;
    height: 350px;

}
`
const Img = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
transform: scale(1);
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
@media (min-width: ${mediaQueries.desktop}) {
	width: 100%;
    height: 350px;

}
`
const InfoWrapper = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: center;
height: 130px;
justify-content: space-between;

@media (min-width: ${mediaQueries.desktop}) {
	height: 150px;
    padding: 25px;
    flex-wrap: wrap;

}
`
const Name = styled.h2`
font-size: 16px;
text-align: center;
@media (min-width: ${mediaQueries.desktop}) {
	font-size: 22px;
}
`
const Button = styled.button`
background-color: transparent;
border-radius: 30px;
border: 2px solid var(--accent-color);
padding: 6px 15px;
font-size: 16px;
cursor: pointer; 
white-space: nowrap;
color: var(--accent-color);
margin-left: auto;
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

:hover{
    color: #fff;
    background-color: var(--accent-color);

}
@media (max-width: 470px) {
    width: 100%;
    margin: 0 auto;
}
@media (min-width: ${mediaQueries.desktop}) {
	font-size: 20px;
    padding: 9px 22px;


}
`
const Price = styled.p`
font-size: 16px;
margin-right: 5px;
@media (max-width: 470px) {
    margin-bottom: 7px;
}
@media (min-width: ${mediaQueries.desktop}) {
	font-size: 22px;
}
`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 470px) {
    display: block;
	flex-wrap: wrap;
}
`

const Counter = styled.div`
width: 110px;
height: 38px;
background-color: #fff;
border: 1px solid #bababa;
border-radius: 10px;
display: flex;
align-items: center;
overflow: hidden;
@media (min-width: ${mediaQueries.desktop}) {
	width: 130px;
    height: 45px;
}

`
const Value = styled.p`
display: flex;
align-items: center;
justify-content: center;
color: black;
height: 100%;
width: 45px;
font-size: 16px;
border-right: 1px solid #bababa;
border-left: 1px solid #bababa;
@media (min-width: ${mediaQueries.desktop}) {
	font-size: 18px;
}
`
const CountBtn = styled.button`
font-size: 26px;
font-weight: 500;
height: 100%;
width: 45px;
background-color: #fff;
display: flex;
border: none;
align-items: center;
justify-content: center;
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

:hover{
    font-weight: 700;
    color: var(--accent-color);
}
`

export {CardWrapper, InfoWrapper, ImgWrapper, Name, Button, Price, Img, Container, Counter, Value, CountBtn}