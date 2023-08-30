import styled from "@emotion/styled";

const CardWrapper = styled.li`
width: 350px;
border-radius: 20px;
overflow: hidden;
margin: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
&:hover img{
    transform: scale(1.05);
}
`

const ImgWrapper = styled.div`
width: 100%;
height: 350px;
overflow: hidden;
`
const Img = styled.img`
display: block;
width: 100%;
height: 350px;
object-fit: cover;
transform: scale(1);
transition: all 300ms;
`
const InfoWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 25px;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
height: 150px;
`
const Name = styled.h2`
font-size: 22px;
text-align: center;
`
const Button = styled.button`
background-color: transparent;
border-radius: 30px;
border: 2px solid var(--accent-color);
padding: 9px 22px;
font-size: 20px;
cursor: pointer; 
color: var(--accent-color);
margin-left: auto;
transition: all 300ms;
:hover{
    color: #fff;
    background-color: var(--accent-color);

}
`
const Price = styled.p`
font-size: 22px;
`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Counter = styled.div`
width: 130px;
height: 45px;
background-color: #fff;
border: 1px solid #bababa;
border-radius: 10px;
display: flex;
align-items: center;
overflow: hidden;

`
const Value = styled.p`
display: flex;
align-items: center;
justify-content: center;
color: black;
height: 100%;
width: 45px;
font-size: 18px;
border-right: 1px solid #bababa;
border-left: 1px solid #bababa;

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
:hover{
    font-weight: 700;
    color: var(--accent-color);
}
`

export {CardWrapper, InfoWrapper, ImgWrapper, Name, Button, Price, Img, Container, Counter, Value, CountBtn}