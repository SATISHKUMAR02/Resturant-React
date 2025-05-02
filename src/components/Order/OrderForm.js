import React, { useState, useEffect } from 'react';
import Form from '../../layouts/Form';
import { ButtonGroup, Grid } from '@mui/material';
import Input from '../../controls/Input';
import SelectC from '../../controls/SelectC';
import { InputAdornment } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import Button from '../../controls/Button'
import { createAPIEndpoint, ENDPOINTS } from '../../api';


export default function OrderForm(props) {
    const { values, errors, handleInputChange } = props;
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
          .then(res => {
            let customerList = res.data.map(item => ({
              id: item.customerId,
              title: item.customerName
            }));
            customerList = [{ id: 0, title: 'Select' }, ...customerList];
            setCustomerList(customerList);
            console.log('Customer List:', customerList); 
          })
          .catch(error => console.log(error));
      }, []);

      useEffect(()=>{
        let FoodItem
      })
      
    return (
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid item xs={6}>
                        <Input

                            label="Order Number"
                            name="orderNumber"
                            value={values.orderNumber}
                            InputProps={{

                                startAdornment: (
                                    <InputAdornment
                                        position="start">#</InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectC
                            label="Payment method"
                            name="pMethod"
                            options={[
                                { id: 0, title: "select" },
                                { id: 1, title: "Cash" },
                                { id: 2, title: "UPI" },
                                { id: 3, title: "Card" },
                            ]}
                            value={values.pMethod}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    {customerList.length > 0 && (
                        <SelectC
                            label="Customer"
                            name="customerId"
                            options={customerList}
                            value={values.customerId}
                            onChange={handleInputChange}
                            error={errors.customerId}
                        />
                    )}
                    <Grid item xs={6}>
                        <Input label="Grand Total"
                            name="gTotal"
                            value={values.gTotal}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start">$</InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <ButtonGroup >
                        <MuiButton
                            size='large'
                            type='submit'
                        >SUBMIT</MuiButton>
                        <MuiButton
                            size='large'
                            type='reset '
                        >RESET</MuiButton>
                    </ButtonGroup>
                    <Button
                        size="large"

                    >ORDERS</Button>
                </Grid>

            </Grid>
        </Form>
    );
}

