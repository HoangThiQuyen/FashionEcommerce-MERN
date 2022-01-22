import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], quantity: 0, total: 0 },
  reducers: {
    addProduct: (state, action) => {
      state = {
        ...state,
        products: [...state.products, action.payload],
        quantity: state.quantity + 1,
        total: state.total + action.payload.quantity * action.payload.price,
      };
      return { ...state };
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
