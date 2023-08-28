import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRestaurants, getRestaurantById } from '../../services/apis';

export const fetchAllRestaurants =  createAsyncThunk(
    'restaurants/fetchAll',
    async () => {
      try {
        const restaurants = await getAllRestaurants();
        return restaurants;
      } catch (error) {
        console.log(error);;
      }
    },
);
  
export const fetchRestaurantById =  createAsyncThunk(
    'restaurants/fetchById',
    async (restaurantId: string) => {
      try {
        const restaurant = await getRestaurantById(restaurantId);
        return restaurant;
      } catch (error) {
        console.log(error);;
      }
    },
  );