import React from 'react'
import OrderForm from './OrderForm'
import useForm from '../../hooks/useForm'
import { Grid } from '@mui/material'
import SearchFormItems from './SearchFormItems'
import OrderFoodItems from './OrderFoodItems'

export const Order = (props) => {
    const generateOrdernumber = () => Math.floor(100000 + Math.random() * 90000).toString();
    const getModelObject = () => ({
        orderMasterId: 0,
        orderNumber: generateOrdernumber(),
        customerId: 0,
        pMethod: '',
        gTotal: 0,
        deletedOrderItemIds: '',
        orderDetails: []
    })
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(getModelObject);

    return (
        <Grid container>
            <Grid item xs={12}>
                <OrderForm
                    {...{
                        values, errors, handleInputChange
                    }}
                />
            </Grid>

            <Grid item xs={6}>
                <SearchFormItems />
            </Grid>
            <Grid item xs={6}>
                    <OrderFoodItems/>
            </Grid>
        </Grid>


    )
}
