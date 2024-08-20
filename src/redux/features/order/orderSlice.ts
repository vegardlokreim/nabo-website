import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuItem {
    menuItemId: string;
    price: number;
    quantity: number;
    title: string;
    description: string;
    category: string;
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
        addItem: (state, action: PayloadAction<MenuItem>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.menuItemId === action.payload.menuItemId
            );

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += action.payload.quantity;

                // If the updated quantity is zero or less, remove the item
                if (state.items[itemIndex].quantity <= 0) {
                    state.items.splice(itemIndex, 1);
                }
            } else {
                // Add new item only if the quantity is positive
                if (action.payload.quantity > 0) {
                    state.items.push(action.payload);
                }
            }
        },
        clearOrder: (state) => {
            state.items = [];
        },
        updateItemQuantity: (
            state,
            action: PayloadAction<{ menuItemId: string; quantity: number }>
        ) => {
            const { menuItemId, quantity } = action.payload;
            const itemIndex = state.items.findIndex(
                (item) => item.menuItemId === menuItemId
            );

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += quantity;

                if (state.items[itemIndex].quantity <= 0) {
                    state.items.splice(itemIndex, 1); // Remove item if quantity becomes 0 or less
                }
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.menuItemId !== action.payload
            );
        },
    },
});

// Selectors
export const selectOrderItems = (state: OrderState) => state.items;

export const selectTotalItems = (state: OrderState) =>
    state.items.reduce((total, item) => total + item.quantity, 0);

export const selectSubtotal = (state: OrderState) =>
    state.items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);

export const { addItem, clearOrder, updateItemQuantity, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
