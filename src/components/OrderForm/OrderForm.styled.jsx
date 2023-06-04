import styled from "@emotion/styled";
import { Field, Form as FormikForm} from "formik";

const Wrapper = styled.div`
background-color: #fff;
width: 48%;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 35px 20px;

`
const FormEl = styled(FormikForm)`
display: flex;
flex-direction: column;
align-items: center;
`
const TextField = styled.div`
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 35px;
width: 70%;
`
const Label = styled.label`
position: absolute;
top: 50%;
left: 5px;
color: #adadad;
transform: translateY(-50%);
font-size: 16px;
pointer-events: none;
transition: 0.3s;
`
const Input = styled(Field)`
width: 100%;
padding: 0 5px;
height: 40px;
font-size: 18px;
border: none;
background: none;
outline: none;
:valid ~ label,
:focus ~ label {
  top: -5px;
  color: var(--accent-color);
};
:valid ~ label,
:focus ~ label {
  top: -5px;
  color: var(--accent-color);
};

`
const Button = styled.button`
background-color: transparent;
border-radius: 30px;
border: 2px solid var(--accent-color);
padding: 10px 35px;
font-size: 18px;
cursor: pointer; 
color: var(--accent-color);
:hover{
    color: #fff;
    background-color: var(--accent-color);;
    font-weight: 500;
}
`

export {FormEl, Label, Input, Button, TextField, Wrapper}