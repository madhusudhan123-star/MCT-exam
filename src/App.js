import React from 'react';
import First_page from './pages/First_page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Footer, Navbar } from './components';
import ProductDetails from './pages/product/[slug]';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;