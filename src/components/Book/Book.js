import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const element = <FontAwesomeIcon icon={faHandHoldingUsd} />

const Book = (props) => {
    const {name, book, image, first_publisher, rating, salary} = props.book;
    return (
        <div>
            <div className="my-2 mt-3 col" style={{width: '320px'}}>
                <div className="card h-100">
                <img src={image} className="card-img-top rounded-circle" alt="..."/>
                <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-title"><span className="teal">Book</span>: {book}</h6>
                <p className="card-text"><span className="teal">Rating</span>:
                <Rating
                initialRating={rating}
                emptySymbol="far fa-star far-icon"
                fullSymbol="fas fa-star fas-icon"
                readonly
                /></p>
                <h5 className="card-title"><span className="teal">Salary</span>: <span className="count">${salary}</span></h5>
                <p className="text-secondary">First Publish: {first_publisher}</p>
                </div>
                <div className="card-footer">
                <button onClick={()=>props.displayCartData(props.book)} type="button" className="btn">{element} Add to Salary</button>
                </div>
                </div>
              </div>        
        </div>
    );
};

export default Book;