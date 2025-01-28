import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions/CartAction';

export const ProductList = () => {
    const dispatch = useDispatch();

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 }
    ];

    const handleAddToCart = (product) => {
        alert("Item Added to cart")
        dispatch(addToCart(product));
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - Rs{product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <button>Cart</button>
        </div>
    );
};
