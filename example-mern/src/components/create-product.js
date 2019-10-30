import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            price: 0,
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        
        const product = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price
        }

        axios.post('http://localhost:5000/products/add', product)
            .then( res => console.log(res.data));

            window.location = "/";

    }


    render() {
        return(
            <form  onSubmit={ this.onSubmit } style={{ justifyContent: "center"}} >
            <div className="form-group text-center" >
                <h2> Create new product </h2>
            </div>
            <div className="form-group">
                <label> Enter a name</label>

                <input type="text" 
                    className="form-control" 
                    value={ this.state.name } 
                    onChange={ this.onChangeName } >
                </input>

            </div>
            <div className="form-group">
                <label> Enter a description</label>

                <input type="text" 
                    className="form-control" 
                    value={ this.state.description } 
                    onChange={ this.onChangeDescription } >
                </input>

            </div>
            <div className="form-group">
                <label> Enter a price</label>

                <input type="text" 
                    className="form-control" 
                    value={ this.state.price } 
                    onChange={ this.onChangePrice } >
                </input>

            </div>
            <div className="form-group text-right">
            <input type="submit" value="Create product" className="btn btn-primary" />
            </div>
            </form>
        )
    }

}