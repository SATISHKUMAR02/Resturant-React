import React from 'react'
import { ListItem, ListItemText, List, Paper, InputBase, ListItemSecondaryAction, Button } from '@mui/material';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import { useState, useEffect } from 'react';
export default function SearchFormItems() {
    const [foodItemList, setFoodItemList] = useState([]);
    // implementation of filter options
    const [searchKey, setSearchKey] = useState();
    const [searchList, setSearchList] = useState([]);
    // this use effect is for initially calling the APIs
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.FOODITEM).fetchAll()
            .then(res => {
                setFoodItemList(res.data);
                setSearchList(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        let x = [...foodItemList]
        x = x.filter(y => {
            return y.foodItemName.toLowerCase()
                .includes(searchKey.toLocaleLowerCase())
        })
        setSearchList(x);
    }, [searchKey])
    return (
        <div>
            <Paper>
                <InputBase
                    placeholder='search food items'
                    value={searchKey}
                    onChange={e => setSearchKey(e.target.value)}
                />
            </Paper>
            list of all food items ordered
            <List>
                {
                    searchList.map((item, idx) => (
                        <ListItem
                            key={idx}>
                            <ListItemText
                                primary={item.foodItemName}
                                secondary={item.price}
                            />
                            <ListItemSecondaryAction>
                                <Button>
                                    ADD +1
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}
