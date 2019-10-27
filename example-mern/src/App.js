import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from "./components/create-user"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="container" style={{ width: "50%", justifyContent: "center" }}>
      <Navbar />

      <CreateUser />
    </div>
  );
}

export default App;
