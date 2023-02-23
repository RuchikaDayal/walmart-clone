import {configureStore } from '@reduxjs/toolkit';
import cartSlice from './addcart';
import authaction from './authaction';
const store = configureStore ({
    reducer:{ 
        auth:authaction,
     
        cart : cartSlice.reducer,
    }
})

export default store;
