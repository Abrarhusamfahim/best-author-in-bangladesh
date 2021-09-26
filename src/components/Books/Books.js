import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'
const Books = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    const displayCartData = (event)=>{
        const newCart = [...cart, event]
        setCart(newCart)
    }
    return (
        <div>
            <div className="input-container">
            <div class="input-group mb-3 w-75 mx-auto">
                    <input type="text" class="form-control text-center" placeholder="Search your favourite Athour name" aria-label="Search your favourite Athour name"/>
                    
                </div>
            </div>
           <div className="row">
                   <div className='col-8' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                   {
                       books.map(book => <Book displayCartData={displayCartData} key={book.name} book={book}></Book>)
                   }
                   </div>
              
               <div class="col-3" className="cart-container">
                   <Cart cart={cart}></Cart>
               </div>
           </div>
        </div>
    );
};

export default Books;