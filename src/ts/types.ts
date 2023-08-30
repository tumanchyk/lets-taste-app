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


export type Order = {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    rest: string;
    type: string;
};

export type Orders = Order[];

export interface OrderCardProps {
    dish: Order;
    key: string; 
}

export interface DishCardProps {
    dish: Dish;
}

export type Operator = "+" | "-";

export type FormData = {
    name: string;
    number: string;
    email: string;
    address: string;
}