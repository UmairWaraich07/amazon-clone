import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketData: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let data = action.payload;
      let id = data.id;
      let find = state.basketData.find((item) => item.id === id);
      if (find === undefined) {
        state.basketData = state.basketData.concat(action.payload);
      } else {
        find.quantity += 1;
      }
    },
    removeFromBasket: (state, action) => {
      let data = action.payload;
      let id = data.id;
      state.basketData = state.basketData.filter((item) => item.id !== id);
    },
    increment: (state, action) => {
      const id = action.payload;
      let find = state.basketData.find((item) => item.id === id);
      if (find) {
        find.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      let find = state.basketData.find((item) => item.id === id);
      if (find) {
        find.quantity -= 1;
      }
      if (find.quantity === 0) {
        state.basketData = state.basketData.filter((item) => item.id !== id);
      }
    },
    emptyBasket: (state) => {
      state.basketData = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increment,
  decrement,
  emptyBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
