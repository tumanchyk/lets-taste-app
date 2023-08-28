import { createSlice } from '@reduxjs/toolkit';
import { fetchAllRestaurants, fetchRestaurantById } from './restaurantsOperation';
import { RestaurantInitialState } from '../../ts/types';
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState: RestaurantInitialState = {
      restaurants: [],
      currentRest: {},
      isLoading: false,
      error: null,
    }


const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAllRestaurants.rejected, handleRejected)
            .addCase(fetchAllRestaurants.pending, handlePending)
            .addCase(fetchAllRestaurants.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.restaurants = action.payload;
            })
            .addCase(fetchRestaurantById.rejected, handleRejected)
            .addCase(fetchRestaurantById.pending, handlePending)
            .addCase(fetchRestaurantById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.currentRest = action.payload;
            })
    }
})

 export const restaurantsReducer = restaurantsSlice.reducer