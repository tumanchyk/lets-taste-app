export type Dish = {
    name: string;
    type: string;
    image: string;
    price: number;
    id: string;
    rest: string;
};
export type Restaurant = {
    restaurant: string;
    dishes: Dish[];
    id: string;
};

export type RestaurantInitialState = {
    restaurants: Restaurant[];
    currentRest: Restaurant | {};
    isLoading: boolean;
    error: any | null;
};

