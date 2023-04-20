// allProductsReducer.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../api";

const initialState = {
  products: [],
  categories: [],
  subcategories:[],
  selectedCategory: null,

};

export const updateProductAsync = createAsyncThunk(
    'products/updateProduct',
    async (product,id) => {
        
      const response = await fetch(`https://e-commerce-server-hhpk.onrender.com/items/update/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product.product),
      });
      console.log(product.product)
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }
      
      return data;
    }
  );
  
  
  
export const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.products.push(action.payload);
      },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSubCategories: (state, action) => {
      state.subcategories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProductsLoading: (state) => {
        state.isLoading = false;
      },
      setProductsError: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      deleteProduct: (state, action) => {
        state.products = state.products.filter((product) => product._id !== action.payload);
      },
      updateProduct: (state, action) => {
        const updatedProductIndex = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (updatedProductIndex !== -1) {
          state.products[updatedProductIndex] = action.payload;
        }
      },
    
      extraReducers: (builder) => {
        builder
          .addCase(updateProductAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(updateProductAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updatedProduct = action.payload;
            const updatedProductIndex = state.products.findIndex(
              (product) => product._id === updatedProduct._id
            );
            if (updatedProductIndex !== -1) {
              state.products[updatedProductIndex] = updatedProduct;
            }
          })
          .addCase(updateProductAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
              ? action.payload
              : "Failed to update product";
          });
      },
      

  },
});

export const { setProducts, setCategories, selectCategory,setProductsLoading, setProductsError,deleteProduct,updateProduct,addProduct } =
  allProductsSlice.actions;

  export const fetchProducts = () => async (dispatch) => {
    try {
      dispatch(setProductsLoading());
      const products = await getAllProducts();
      dispatch(setProducts(products));
    } catch (error) {
      dispatch(setProductsError(error.message));
    }
  };

export default allProductsSlice.reducer;
