
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({ // this is initialize with @reduxjs/toolkit and react-redux
    name: 'cart', // this represent the name of the slice
    initialState, // an object representing the initial state of your slice
    reducers: { // this contain the reducer objects
        addItemToCart(state, action) { // add a new item to the cart
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
    }
});
const initialState = {
    cartItems: [],
};


