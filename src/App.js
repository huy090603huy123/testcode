// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Cần sửa lại Navbar
// import Details from './components/Details'; // Xóa hoặc sửa nếu không cần trang chi tiết sản phẩm
// import Cart from './components/Cart'; // Xóa hoặc sửa nếu không có giỏ hàng
import Default from './components/Default';
// import Modal from './components/Modal'; // Xóa hoặc sửa nếu không dùng modal sản phẩm

import HomePage from './components/HomePage'; // Import component trang chủ mới

function App() {
  return (
    <React.Fragment>
      <Navbar /> {/* Navbar này cần được thiết kế lại */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/details" component={Details} /> */}
        {/* <Route path="/cart" component={Cart} /> */}
        <Route component={Default} />
      </Switch>
      {/* <Modal /> */}
    </React.Fragment>
  );
}

export default App;