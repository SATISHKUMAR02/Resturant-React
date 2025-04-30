import React from 'react'
import OrderForm from './OrderForm'
import useForm from '../../hooks/useForm';

export const Order = (props) => {
    const generateOrdernumber = () => Math.floor(100000 + Math.random() * 90000).toString();
    const getModelObject = () => ({
        orderMasterId: 0,
        orderNumber: generateOrdernumber(),
        customerId: 0,
        pMethod: null,
        gTotal: 0,
        deletedOrderItemIds: '',
        orderDetails: []
    })
    const {values,setValues,errors,setErrors,handleInputChange,resetForm} = useForm(getModelObject);

  return (
    <div>
        <OrderForm
        {
            ...{
                values,errors,handleInputChange
            }
        }
        
        />

    </div>
  )
}
