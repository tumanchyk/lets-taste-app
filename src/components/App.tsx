import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home'
import RestaurantList from '../pages/RestaurantList/RestaurantList';
import Cart from '../pages/ShoppingCart/ShoppingCart'
import { setOrders, setLocation } from '../redux/orders/ordersSlice';
import { useDispatch } from 'react-redux';
import OrderHistory from '../pages/OrderHistory/OrderHistory';

const App: React.FC = () => {
  const dispatch = useDispatch()

 useEffect(() => {
    const storedDishes = JSON.parse(window.localStorage.getItem('OrderedDishes')) || [];
    dispatch(setOrders(storedDishes))
  }, []);

  useEffect(() => {       
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {    
          const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
          
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                dispatch(setLocation(data.address.city))
              } else {
                console.log("Location name not found.");
              }
            })
            .catch((error) => {
              console.error("Geocoding error:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='rest/:id' element={<RestaurantList />}>
           </Route>
            <Route path='cart' element={<Cart />}/>
            <Route path='history' element={<OrderHistory />}/>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
  )
}

export default App
