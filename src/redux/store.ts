import { configureStore } from "@reduxjs/toolkit";
import agentReducers from "@/redux/slice/agentSlice";

const store = configureStore({
  reducer: {
    agents: agentReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
