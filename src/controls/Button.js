import React from 'react'
import { Button as MuiButton } from '@mui/material'
import {  } from '@mui/styles';



export default function Button(props) {
    const { children,onClick, color, variant, className, ...other } = props;
    return (
        <MuiButton
            variant={variant || "contained"}
            color={color || "default"}
            onClick={onClick}
            {...other}>
            {children}


        </MuiButton>
    )
}
