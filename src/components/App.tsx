import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home'
import Cart from '../pages/ShoppingCart/ShoppingCart'
import { createContext } from 'react';
import {products} from '../products'
export const Context = createContext()

const App: React.FC = () => {
  const [rest, setRest] = useState(products[0])
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Context.Provider value={{rest, setRest, count, setCount, totalPrice, setTotalPrice, isModalOpen, setIsModalOpen}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     </Context.Provider>
  )
}

export default App
