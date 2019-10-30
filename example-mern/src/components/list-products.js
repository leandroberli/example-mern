import React, { Component } from 'react';
import Link  from 'react-router-dom';
import axios from 'axios';

const Product = props => (
    <tr>
        <td>{ props.product.name }</td>
        <td>{ props.product.description }</td>
        <td> $ { props.product.price }</td>
    </tr>
)

export default class ListProducts extends Component {

    constructor(props){
        super(props)

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
          .then(response => {
            this.setState({ 
                products: response.data
            })
          })
          .catch( error => {
            console.log(error)
          })
      }

      productList() {
        return this.state.products.map(current => {
          return <Product product={current} key={current._id}/>;
        })
      }

    render(){
        return(
            <div className="container">
                <h2>List of products</h2>
                <table className="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.productList() }
                    </tbody>
                </table>
            </div>
        )
    }
}