import React from 'react';
import First_page from './pages/First_page';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Card, Footer, FooterBanner, Navbar } from './components';
import ProductDetails from './components/ProductDetails';
import About from './pages/About';
import Category from './pages/Category';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<First_page />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
      <FooterBanner />
    </main>
  );
}

export default App;