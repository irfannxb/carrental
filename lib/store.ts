import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import carReducer from "./features/Cars/CarSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cars: carReducer,

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;