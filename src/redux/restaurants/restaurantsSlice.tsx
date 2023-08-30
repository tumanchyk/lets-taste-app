import { createSlice } from '@reduxjs/toolkit';
import { fetchAllRestaurants, fetchRestaurantById } from './restaurantsOperation';
import { restInitialState } from '../../helpers/initialStates';
import { handleRejected, handlePending } from '../../helpers/statusFunc';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: restInitialState,
  reducers: {},
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