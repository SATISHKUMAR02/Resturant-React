import React from 'react';
import { FormControl } from '@mui/material';

export default function Form(props) {
    const { children, ...other } = props;

    return (
        <form
            noValidate
            autoComplete="off"
            {...other}
            style={{
                '& .MuiFormControl-root': {
                    width: '90%',
                    margin: '8px', // equivalent to theme.spacing(1)
                }
            }}
        > 
            {children}
        </form>
    );
}
