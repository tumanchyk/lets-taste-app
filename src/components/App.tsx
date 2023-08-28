import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home'
import RestaurantList from '../pages/RestaurantList/RestaurantList';
import Cart from '../pages/ShoppingCart/ShoppingCart'
import { createContext } from 'react';
export const Context = createContext()

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Context.Provider value={{count, setCount, totalPrice, setTotalPrice, isModalOpen, setIsModalOpen}}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='rest/:id' element={<RestaurantList />}>
           </Route>
            <Route path='cart' element={<Cart />}/>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     </Context.Provider>
  )
}

export default App
