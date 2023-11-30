
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Category from './pages/category/Category';
import Update from './pages/category/Update';
import CategoryList from './pages/category/CategoryList';
import ProductList from './pages/product/ProductList';
import Product from './pages/product/Product';
import UpdateProduct from './pages/product/UpdateProduct';
import Order from './pages/Order';

const App = () => {
  
  return (
    <BrowserRouter >
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route  path="/categorylist" element={<CategoryList />} />
        <Route  path="/category" element={<Category />} />
        <Route  path="/update/:id" element={<Update />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Route>
    </Routes>
      <Header />
      <SideNav />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
