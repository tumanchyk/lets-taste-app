import { Restaurant } from "../../ts/types";
import { RootState } from "../store";

export const selectRestaurants = ( state: RootState ): Restaurant[] => state.restaurants.restaurants;
export const selectCurrentRestaurants = ( state: RootState ): Restaurant | {} => state.restaurants.currentRest;
