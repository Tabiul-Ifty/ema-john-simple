import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = Math.round(total + prd.price);

    }

    let shipping = 0;

    if (total > 35) {
        shipping = 0;

    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = Math.round(total * .1);
    const grndTotal = Math.round(total + shipping + tax);
    return (

        <div >
            <div>
                <h3>Order Summary</h3>
            </div>

            {/* <h3>Order summary</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {total} $</p>
            <p>Shipped Cost: {shipping} $</p>
            <p><small>Tax + Vat : {tax} $</small></p>
            <p>Total: {grndTotal} $</p> */}
            <div className="order-summary">
                <div className="info">
                    <p>Item Ordered</p>
                    <p>Product Price</p>
                    <p>Shipped Cost</p>
                    <p><small>Tax + Vat</small></p>
                    <p>Total</p>
                </div>

                <div className="price">
                    <p>: {cart.length}</p>
                    <p>: {total} $</p>
                    <p>: {shipping} $</p>
                    <p><small>: {tax} $</small></p>
                    <p>: {grndTotal} $</p>

                </div>
            </div>
        </div>


    );
};

export default Cart;