import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        const cartItem = {
            ...action.payload,
            // key: uuidv4(), // add a unique key to the item
          
          };
        state.products.push(cartItem);
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;