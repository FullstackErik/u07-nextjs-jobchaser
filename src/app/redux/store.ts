import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobFilterSlice";

export const store = configureStore({
    reducer: {
        jobsSelection: jobReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;