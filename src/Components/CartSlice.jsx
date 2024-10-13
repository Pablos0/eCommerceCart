
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

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

        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // update cartItems array by filtering out the item with the ID provided in action payload
        },

        clearCart(state) { // It takes state parameter to clear cart
            state.cartItems = [];
        },

        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
            /* state: represents the current state of the Redux store. 
            action: This is an object that describes the action that occurred. Redux actions are plain JavaScript objects that must have a type property indicating the type of action being performed. */
        },

        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity, 
} = CartSlice.actions;

export default CartSlice.reducer;


