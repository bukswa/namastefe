import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total++;
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload));
      state.total--;
    },
    reset: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});
export const { addItem, removeItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
