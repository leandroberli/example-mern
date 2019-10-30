import React, { Component } from 'react';
import Link  from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{ props.user.email }</td>
        <td>{ props.user.username }</td>
        <td>{ props.user.name }</td>
        <td>{ props.user.lastname }</td>
    </tr>
)

export default class ListUsers extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            this.setState({ 
                users: response.data
            })
          })
          .catch( error => {
            console.log(error)
          })
      }

    userList() {
        return this.state.users.map(current => {
          return <User user={current} key={current._id}/>;
        })
      }

    render(){
        return(
            <div className="container">
                <h2>List of users</h2>
                <table className="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Lastname</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}