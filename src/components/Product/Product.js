import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    console.log(props);
    const { img, name, seller, description, price, stock } = props.product;

    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="main-btn" 
                        onClick={()=> props.handleAddProduct(props.product)}>
                         <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>


        </div>
    );
};

export default Product;