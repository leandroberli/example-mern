import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            email: "@gmail.com",
            name: "",
            lastname:"",
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

   onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            email: this.state.email,
            name: this.state.name,
            lastname: this.state.lastname,
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        
<<<<<<< HEAD
        window.location = "/users";
=======
        window.location = "/";
>>>>>>> master
    }

    render(){
        return(
            <form  onSubmit={ this.onSubmit } style={{ justifyContent: "center"}} >
            <div className="form-group text-center" >
                <h2> Create new user </h2>
            </div>
            <div className="form-group">
                <label> Enter a user name</label>

                <input type="text" 
                    className="form-control" 
                    value={ this.state.username } 
                    onChange={ this.onChangeUsername } >
                </input>

            </div>
            <div className="form-group">
                <label> Enter a email</label>

                <input type="email" 
                    className="form-control" 
                    value={ this.state.email } 
                    onChange={ this.onChangeEmail } >
                </input>

            </div>
            <div className="form-group">
                <label> Name </label>

                <input type="text" 
                    className="form-control" 
                    value={ this.state.name }
                    onChange={ this.onChangeName } >
                </input>

            </div>
            <div className="form-group">
                <label> Last name</label>

                <input type="text" 
                    className="form-control"
                    value={ this.state.lastname }
                    onChange={ this.onChangeLastname } >
                </input>

            </div>
            <div className="form-group text-right">
            <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
            </form>
        )
    }




}


