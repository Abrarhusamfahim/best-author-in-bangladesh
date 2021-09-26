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
    // let name = ' ';
    // for(const book of cart){
    //     name = name + book.name;

    // }
    
    return (
        <div className="cart-gap">
            <h2><span className="user">{user}</span> : <span className="cart-length">{props.cart.length}</span></h2>
            <hr />
            <h3><span className="total">Total Salary</span> : <span className="cart-length">${total.toFixed(2)}</span></h3>
            
            <ul>
                {
                    cart.map(item => <li key={item.name}>{item.name}</li>)
                }
            </ul>
            {/* <p className="show-name">name:</p> */}
            <hr />
            <button type="button" className="btn btn-outline-dark">Buy Book</button>
        </div>
    );
};

export default Cart;