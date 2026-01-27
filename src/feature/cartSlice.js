import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartCount: 0,
    },
    reducers: {

        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(p => p.id === item.id);

            if (!existing) {
                state.items.push({ ...item, quantity: 1 });
            }
        },


        incQty: (state, action) => {
            const item = state.items.find(p => p.id === action.payload);
            if (item) item.quantity += 1;
        },


        descQty: (state, action) => {
            const item = state.items.find(p => p.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },


        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

       
    },
});

export const {
    addToCart,
    incQty,
    descQty,
    removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
