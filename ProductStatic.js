import React, {Component} from 'react';
import './Product.css';

export default class ProductStatic extends Component {
    state = {
        cart: [],
        total: 0
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    //use arrow function to avoid binding "this" to the object
    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }

    add = () => { this.setState({
        cart: ['ice cream'],
        total: 5 })
    }

    remove = () => { this.setState({
        cart: [] })
    }

    render() {
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart: {this.state.cart.length} total item(s).
                </div>
                <div>Total: {this.getTotal()}</div>
                <div className="product">
                    <span role="img" aria-label="image">🍦</span>
                </div>
                <button onClick={this.add}>Add</button>
                <button>Remove</button>

            </div>
        )
    };

}