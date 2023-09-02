import * as yup from 'yup';

export const orderSchema = yup.object().shape({
    name: yup.string().min(2, 'Must be more than 2 characters').required('name is required'),
    number: yup.string().required(),
    address: yup
        .string()
        .min(6, 'Must be more than 6 characters')
        .required('address is required'),
    details: yup.string()
});
