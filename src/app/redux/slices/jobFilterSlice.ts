import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type JobFilterState = {
    place: string,
    position: string,
}

const initialState: JobFilterState = {
    place: "",
    position: ""
}

export const jobFilterSlice = createSlice({

    name: "jobFilter",
    initialState,
    reducers: {
        updatePlace(state, action: PayloadAction<string>) {
            state.place = action.payload
        },
        updatePosition(state, action: PayloadAction<string>) {
            state.position = action.payload
        }
    }
});

export const { updatePlace, updatePosition } = jobFilterSlice.actions;
export default jobFilterSlice.reducer;