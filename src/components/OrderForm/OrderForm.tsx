import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { FormEl, Label, Input, Button, TextField, Wrapper } from './OrderForm.styled';
import { Title } from '../commonStyleElem/commonStyles';
import { FormData } from '../../ts/types';
import { openModal } from '../../redux/orders/ordersSlice';
import { formInitialValues } from '../../helpers/initialStates';

const OrderForm: React.FC = () => {
    const dispatch = useDispatch()
    

    const onFormSubmit = (value: FormData) => {
        dispatch(openModal(true))
        window.localStorage.removeItem('OrderedDishes')
        console.log(value);
    }

    const handleSubmit = (values: FormData, actions: any) => {
        onFormSubmit({
            ...values
            });
       actions.resetForm();
    }
    return <Wrapper>
        <Title>Delivery information</Title>
        <Formik 
        initialValues={formInitialValues}
        onSubmit={handleSubmit}>
            <FormEl>
                <TextField>
                    <Input
                        type="text"
                        name="name"
                        autocomplete="off"
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
                <TextField>
                    <Input
                        type="text"
                        name="details"
                        autoComplete="off"
                    />
                    <Label>
                        Details for courier
                    </Label>
                </TextField>
                <Button type='submit'>Submit</Button>
            </FormEl>
        </Formik>
    </Wrapper>
}
export default OrderForm