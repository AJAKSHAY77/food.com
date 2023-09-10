// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slice"

// const store = configureStore({
//     reducer: {
//     cart:cartSlice,
// }
// })

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slice"


const store = configureStore({
    reducer: {
         cart:cartslice
     }
});
export default store;
