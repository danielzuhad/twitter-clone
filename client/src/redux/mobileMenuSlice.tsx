import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MobileMenuState {
  mobileMenu: boolean;
}

const initialState: MobileMenuState = {
  mobileMenu: window.innerWidth <= 813,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.mobileMenu = action.payload;
    },
  },
});

export const { setMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
