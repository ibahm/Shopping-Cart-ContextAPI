import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Checkout from './Pages/Checkout';
import {CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CartProvider><App/></CartProvider>}/>
            <Route path="/checkout" element={<CartProvider><Checkout/></CartProvider>}/>
        </Routes>
    </BrowserRouter>
);