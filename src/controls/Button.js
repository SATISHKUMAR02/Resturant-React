import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        }
    }
}))

export default function Button(props) {
    const classes = useStyles();
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
