import { Formik } from 'formik';
import { useContext } from 'react';
import { Context } from '../../App';
import { FormEl, Label, Input, Button, TextField, Wrapper } from './OrderForm.styled';
import { Title } from '../commonStyles';
const OrderForm = () => {
    const {setIsModalOpen, isModalOpen} = useContext(Context)
    const initialValues = {
    name: '',
    number: '',
    email: '',
    address: ''
    }

    const onFormSubmit = (value) => {
        setIsModalOpen(true)
        window.localStorage.removeItem('OrderedDishes')
    }

    const handleSubmit = (values, actions) => {
        onFormSubmit({
            ...values
            });
       actions.resetForm();
    }
    return <Wrapper>
            <Title>Delivery information</Title>
            <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <FormEl>
                <TextField>
                    <Input
                        type="text"
                        name="name"
                        autoComplete="off"
                        required
                    />
                    <Label>Name</Label>
               </TextField>
                <TextField>
                    <Input
                        type="tel"
                        name="number"
                        autoComplete="off"
                        required
                    />
                    <Label>Number</Label>
               </TextField>
                <TextField>
                    <Input
                        type="email"
                        name="email"
                        autoComplete="off"
                        required
                    />
                    <Label>
                        Email
                    </Label>   
                </TextField>
                <TextField>
                    <Input
                        type="text"
                        name="address"
                        autoComplete="off"
                        required
                    />
                    <Label>
                        Address
                    </Label>
                </TextField>
                <Button type='submit'>Submit</Button>
            </FormEl>
            </Formik>
        </Wrapper>
}
export default OrderForm