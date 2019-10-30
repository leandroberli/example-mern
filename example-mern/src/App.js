import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from "./components/create-user"
import Navbar from "./components/navbar"
import ListProducts from './components/list-products';
import ListOrders from './components/list-orders';
import CreateProduct from './components/create-product';
<<<<<<< HEAD
import ListUsers from './components/list-users';
=======
>>>>>>> master

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className="container" style={{ width: "50%", justifyContent: "center" }}>
        <Route path="/" />
<<<<<<< HEAD
        <Route path="/users" exact component={ListUsers} />
        <Route path="/users/add" exact component={CreateUser} />
        <Route path="/products" exact component={ListProducts} />
=======
        <Route path="/users" exact component={CreateUser} />
        <Route path="/products" exact component={CreateProduct} />
>>>>>>> master
        <Route path="/orders" exact component={ListOrders} />
      </div>
    </div>
    </Router>
  );
}

export default App;
