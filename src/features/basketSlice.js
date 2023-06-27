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
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
