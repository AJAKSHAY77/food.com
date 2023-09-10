// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items:["bananas","apple","iccream"]
//     },
//     reducers: {
//         addItem: (state,action) => {
//             state.items.push(action.payload)
//         },
//         removeitem: (state,action) => {
//             state.items.pop();
//         },
//         clearcart: (state) => {
//             state.items = [];
//         }
//     }
// })

// export const { addItem, removeitem, clearcart } = cartSlice.actions;
// export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana"],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.pop();
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const { additem, removeitem, clearcart } = cartslice.actions;
export default cartslice.reducer;
