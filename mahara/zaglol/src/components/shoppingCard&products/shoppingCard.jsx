import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {
    state = { 
        products: [
            {
                id: 1,
                name: "Product 1",
                price: 100
            },
            {
                id: 2,
                name: "Product 2",
                price: 200
            },
            {
                id: 3,
                name: "Product 3",
                price: 300
            }
        ]
    };

handleDelete =(Product) =>{
    //clone 
    //edit
    //set state

  const newProducts=  this.state.products.filter(p => p.id !== Product.id);
this.setState({products: newProducts});
}
handleReset =() => {
    //clone
    let products = [...this.state.products];
    //edit
    products.map(p => {
        p.count =0;
        return p;
    });
    // setState
    this.setState({products: products});

// const newProducts= this.state.products.filter(p => p.
}


    render() { 
        console.log(this.props)
        return (
            <React.Fragment>
                <h1>ShoppingCart</h1>
                <button onClick={this.handleReset} className="btn btn-secondary btn-sm m-2">Reset</button>
                {this.state.products.map(product => (
                    <Product key={product.id}
                    onDelete={this.handleDelete}
                         product={product} >
                            <h4>product.id</h4>
                         </Product>
                ))}
            </React.Fragment>
        );
    }
}

export default ShoppingCart;
