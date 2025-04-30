import { FormControl, InputLabel,Select,MenuItem,FormHelperText } from '@mui/material';
import React from 'react'

export default function SelectC(props) {
    const {name,label,value,varient,onChange,options,error=null} = props;
  return (
   <FormControl
   variant={varient || "outlined"}
   fullWidth
   {...(error && {error:true})}
   /*
   it is conditionally adding the error = true if error is true
   if error= true , then it becomes , <FormControl variant ="outlined" error={true}
   */  
   >
    <InputLabel>{label}</InputLabel>
    <Select
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    
    >{
        options.map(
            item=>(<MenuItem key={item.id} value={item.id}>
                {item.title}
            </MenuItem>)
        )
    }
    </Select>
    {error && <FormHelperText>{error}</FormHelperText>}

   </FormControl>
  )
}
