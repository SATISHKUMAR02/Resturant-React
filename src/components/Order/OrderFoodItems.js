import React, { useState,useEffect } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../../api'
import { InputBase, List, ListItem, ListItemText, Paper } from '@mui/material';
export default function OrderFoodItems() {
    // const [foodItemList, setFoodItemList] = useState([]);
    // // implementation of filter options
    // const[searchKey,setSearchKey]=useState();
    // const[searchList,setSearchList] = useState([]);


    // useEffect(() => {
    //     createAPIEndpoint(ENDPOINTS.FOODITEM).fetchAll()
    //         .then(res => {
    //             createAPIEndpoint(ENDPOINTS.FOODITEM).fetchAll()
    //                 .then(res => {
    //                     setFoodItemList(res.data)
    //                 }).catch(err => console.log(err))
    //         })
    // })

    return (
        <div>
            {/* <Paper>
                <InputBase
                placeholder='search food items'
                />
            </Paper>
            list of all food items ordered
            <List>
                {
                    foodItemList.map((item, idx) => (
                        <ListItem
                            key={idx}>
                            <ListItemText
                                primary={item.foodItemName}
                                secondary={item.price}
                            />
                        </ListItem>
                    ))
                }
            </List> */}
        </div>
    )
}
