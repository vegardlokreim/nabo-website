import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuItem {
    menuItemId: string;
    price: number;
    quantity: number;
    title: string; // Added title field
}

export interface OrderState {
    items: Array<MenuItem>;
}

const initialState: OrderState = {
    items: [],
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        // Get item and push it to the state's items array. If it's already present, increment quantity
        addItem: (state, action: PayloadAction<MenuItem>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.menuItemId === action.payload.menuItemId
            );

            if (itemIndex !== -1) {
                // If item exists, increment its quantity
                state.items[itemIndex].quantity += action.payload.quantity;
            } else {
                // If item does not exist, add it to the array
                state.items.push(action.payload);
            }
        },
        // Action to clear all items from the order
        clearOrder: (state) => {
            state.items = [];
        },
    },
});

// Selectors
export const selectOrderItems = (state: OrderState) => state.items;

export const selectTotalItems = (state: OrderState) =>
    state.items.reduce((total, item) => total + item.quantity, 0);

export const selectSubtotal = (state: OrderState) =>
    state.items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);

export const { addItem, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
