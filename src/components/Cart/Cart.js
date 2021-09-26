import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie} from '@fortawesome/free-solid-svg-icons'
const user = <FontAwesomeIcon icon={faUserTie} />
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const book of cart){
       total = total + book.salary;
    }
    let name = ' ';
    for(const book of cart){
        name = name + book.name;
    }
    return (
        <div className="cart-gap">
            <h2><span className="user">{user}</span> : <span className="cart-length">{props.cart.length}</span></h2>
            <h3>Total Salary: ${total.toFixed(2)}</h3>
            <p>name: {name}</p>
            <hr />
            <button type="button" class="btn btn-outline-dark">Buy Book</button>
        </div>
    );
};

export default Cart;