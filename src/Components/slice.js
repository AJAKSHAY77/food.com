import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:["bananas","apple","iccream"]
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload)
        },
        removeitem: (state,action) => {
            state.items.pop();
        },
        clearcart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeitem, clearcart } = cartSlice.actions;
export default cartSlice.reducer