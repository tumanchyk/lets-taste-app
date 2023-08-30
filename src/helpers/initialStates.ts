import { RestaurantInitialState } from "../ts/types"

export const orderInitialState = {
    orderList: [],
    isDone: false
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
    email: '',
    address: '',
    details: ''
}