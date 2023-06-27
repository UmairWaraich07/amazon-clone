import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import sidebarReducer from "../features/sidebarSlice";
import userReducer from "../features/userSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    headerSidebar: sidebarReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
