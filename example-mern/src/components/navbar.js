import React, { Component } from 'react';

export default class Navbar extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Home</a>
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
                            <a className="nav-link" href="#">Users<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Products<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Orders<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
     
    }

}


