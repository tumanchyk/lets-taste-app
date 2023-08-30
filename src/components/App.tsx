import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home'
import RestaurantList from '../pages/RestaurantList/RestaurantList';
import Cart from '../pages/ShoppingCart/ShoppingCart'
import { setOrders } from '../redux/orders/ordersSlice';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch()

 useEffect(() => {
    const storedDishes = JSON.parse(window.localStorage.getItem('OrderedDishes')) || [];
    dispatch(setOrders(storedDishes))
  }, []);


  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='rest/:id' element={<RestaurantList />}>
           </Route>
            <Route path='cart' element={<Cart />}/>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
  )
}

export default App
