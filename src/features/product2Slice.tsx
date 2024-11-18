import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Product, products2 } from "../components/ProductData2";

// Define initial state
interface Product2State {
  items: Product[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
}

const initialState: Product2State = {
  items: products2,
  status: "idle",
};

// Define actions
export const fetchPending = createAction("products2/fetchPending");
export const fetchFulfilled = createAction<Product[]>("products2/fetchFulfilled");
export const fetchRejected = createAction("products2/fetchRejected");

// Create the slice
const product2Slice = createSlice({
  name: "products2",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchFulfilled, (state, action) => {
        state.status = "fulfilled";
        state.items = action.payload;
      })
      .addCase(fetchRejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default product2Slice.reducer;
