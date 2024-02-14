import React, {Component} from 'react';
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donut',
        price: 2.5
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

export default class ProductDynamic extends Component {

    state = {
        cart: []
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }


    //use arrow function to avoid binding "this" to the object
    getTotal = () => {
        const total = this.state.cart.reduce(
            (totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product]
        }))
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex((p => p.name === product.name))

            if(productIndex < 0){
                return;
            }

            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
    }


    render() {
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart: {this.state.cart.length} total item(s).
                </div>
                <div>Total: {this.getTotal()}</div>
                <div>
                    {products.map(product => (<div key={product.name}>
                        <div className="product">
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                        </div>
                        <button onClick={() => this.add(product)}>Add</button>
                        <button onClick={() => this.remove(product)}>Remove</button>
                    </div>)) //end of map
                    }
                </div>

            </div>
        )
    }
}