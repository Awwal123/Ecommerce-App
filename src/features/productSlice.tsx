import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products, Product } from "../components/ProductData"; // Import products and Product interface

// Define your initial state type
interface ProductState {
  items: Product[]; // Use the Product type from your data file
  status: string | null;
}

const initialState: ProductState = {
  items: products, // Set the local products array as the initial state
  status: "loaded", // Data is already loaded since it's local
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Optional: add any reducers if needed (e.g., filtering or sorting)
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
