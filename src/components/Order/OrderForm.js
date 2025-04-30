import React, { useState } from 'react';
import Form from '../../layouts/Form';
import { Grid } from '@mui/material';
import Input from '../../controls/Input';
import SelectC from '../../controls/SelectC';
import Button from '../../controls/Button';
import useForm from '../../hooks/useForm';


export default function OrderForm(props) {
    const {values,errors,handleInputChange} = props;
    return (
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid item xs={6}>
                        <Input label="Order Number"
                            name="orderNumber"
                            value={values.orderNumber}
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
                    <SelectC

                        label=""
                        name="customerId"
                        options={[
                            { id: 0, title: "select" },
                            { id: 1, title: "Customer1" },
                            { id: 2, title: "Customer2" },
                            { id: 3, title: "Customer3" },
                            { id: 4, title: "Customer4" }
                        ]}
                        value={values.customerId}
                        onChange={handleInputChange}
                    />
                    <Grid item xs={6}>
                        <Input label="Grand Total"
                            name="gTotal"
                            value={values.gTotal}
                        />
                    </Grid>
                </Grid>
                {/* <Grid item xs={6} >
                    <Input
                        label="Order Number"
                        name="orderNumber"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} >
                    <SelectC
                        label="Customer"
                        name="customerId"
                        options={[
                            { id: 0, title: "select" },
                            { id: 1, title: "C1" },
                            { id: 2, title: "C2" },
                            { id: 3, title: "C3" },
                            { id: 4, title: "C4" }
                        ]}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} >
                    <Input
                        label="Grand Total"
                        name="gtotal"
                        fullWidth
                    />
                </Grid>
            */}
            </Grid>
        </Form>
    );
}

