import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const CartCounter = () => {

    const cart = useSelector((store) => store.ecommerceData);

    return (
        <Box 
        textColor={'black'}
        textColor={'white'}
        borderRadius="50%">
            {cart?.length ? cart.length : 0} </Box>
    )
}