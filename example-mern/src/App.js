import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from "./components/create-user"
import Navbar from "./components/navbar"
import ListProducts from './components/list-products';
import ListOrders from './components/list-orders';
import CreateProduct from './components/create-product';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className="container" style={{ width: "50%", justifyContent: "center" }}>
        <Route path="/" />
        <Route path="/users" exact component={CreateUser} />
        <Route path="/products" exact component={CreateProduct} />
        <Route path="/orders" exact component={ListOrders} />
      </div>
    </div>
    </Router>
  );
}

export default App;
