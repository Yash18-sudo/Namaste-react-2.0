import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items.pop();
    },
    clearItem: (state, action) => {
        // RTK says either mutate the state or return the new state
        //return { items: []}
        state.items.length = 0;
    }
  },
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;