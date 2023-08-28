import { Restaurant, RestaurantInitialState } from "../../ts/types";
export const selectRestaurants = ( state: RestaurantInitialState ): Restaurant[] => state.restaurants.restaurants;
export const selectCurrentRestaurants = ( state: RestaurantInitialState ): Restaurant | null => state.restaurants.currentRest;
