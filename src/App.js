
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Category from './pages/Category';
import Product from './pages/Product';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route  path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
      <Header />
      <Home />
      <SideNav />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
