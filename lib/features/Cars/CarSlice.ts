import { car_interface } from "@/lib/car";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SerializedError } from "@reduxjs/toolkit";
interface CarState {
    cars: car_interface[];
    loading: boolean;
    error: string | null;
}

const initialState: CarState = {
    cars: [],
    loading: true,
    error: null,
}

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const response = await fetch('http://127.0.0.1:8000/api/cars/');
    const data = await response.json();
    return data;
})

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state: CarState) => {
        state.loading = true;
    })
    builder.addCase(fetchCars.fulfilled, (state: CarState, action: PayloadAction<car_interface[]>) => {
        // state.cars = action.payload;
        state.cars = [...action.payload]; // Proper immutable update

        state.loading = false;
    })
    .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cars';
      })
    }
})

export default carSlice.reducer;