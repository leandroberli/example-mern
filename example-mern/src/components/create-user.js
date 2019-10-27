import React, { Component } from 'react';

export default class CreateUser extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <form style={{ justifyContent: "center"}}>
            <div className="form-group">
                <label> <h3>Enter a user name</h3></label>
                <input type="email" className="form-control" ></input>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        )
    }




}


