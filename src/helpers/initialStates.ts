import { RestaurantInitialState } from "../ts/types"

export const orderInitialState = {
    orderList: [],
    isDone: false,
    city: ''
}

export const restInitialState: RestaurantInitialState = {
    restaurants: [],
    currentRest: {},
    isLoading: false,
    error: null
}

export const formInitialValues = {
    name: '',
    number: '',
    address: '',
    details: ''
}