import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link to="/users" className="nav-link">Logo</ Link>
                <button className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/users/add" className="nav-link">Users<span className="sr-only">(current)</span></ Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/products" className="nav-link">Products<span className="sr-only">(current)</span></ Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/orders" className="nav-link">Orders<span className="sr-only">(current)</span></ Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
     
    }

}


