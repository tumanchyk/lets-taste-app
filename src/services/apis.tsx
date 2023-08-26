import axios from "axios";
axios.defaults.baseURL = 'https://645422f3e9ac46cedf383d70.mockapi.io/food-ordering' 

export async function getAllRestaurants (){
    const  {data} = await axios.get('')
    return data
} 
export async function getRestaurantById (restaurantId: string){
    const  {data} = await axios.get(`/${restaurantId}`)
    return data
} 
