import { TUser } from "@/types/global";
import { createSlice } from "@reduxjs/toolkit";

export type TAuthState = {
  user: TUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const initialState: TAuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.isLoading = false;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const {
  setUser,
  setLoading: authSetLoading,
  logOut,
} = authSlice.actions;
export default authSlice.reducer;
