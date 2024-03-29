import React from 'react';
import { connect } from "react-redux";

import {
    bookAddedToCart,
    bookRemoveFromCart,
    allBooksRemoveFromCart } from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (( item, idx ) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className='btn btn-outline-danger'
                        onClick={ () => onDelete(id) }>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <button
                        className='btn btn-outline-success'
                        onClick={ () => onIncrease(id) }>
                        <i className='fa fa-plus-circle'/>
                    </button>
                    <button
                        className='btn btn-outline-warning'
                        onClick={ () => onDecrease(id) }>
                        <i className='fa fa-minus-circle'/>
                    </button>
                </td>
            </tr>
        )
    });

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>

            <div className='total'>
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProprs = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
};

export default connect(mapStateToProprs, mapDispatchToProps)(ShoppingCartTable);