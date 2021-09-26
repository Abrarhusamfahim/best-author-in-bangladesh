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
            <div className="mx-auto mb-3 input-group w-75">
                    <input type="text" className="text-center form-control" placeholder="Search your favourite Athour name" aria-label="Search your favourite Athour name"/>
                    
                </div>
            </div>
           <div className="row">
                   <div className='col-8' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                   {
                       books.map(book => <Book displayCartData={displayCartData} key={book.name} book={book}></Book>)
                   }
                   </div>
              
               <div className="col-3 cart-container">
               <Cart cart={cart}></Cart>
               </div>
           </div>
        </div>
    );
};

export default Books;