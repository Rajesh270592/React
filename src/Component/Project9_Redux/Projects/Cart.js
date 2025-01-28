import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Actions/CartAction';

export const Cart = () => {
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        alert("Item Removed")
        dispatch(removeFromCart(itemId));
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Rs{item.price}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};