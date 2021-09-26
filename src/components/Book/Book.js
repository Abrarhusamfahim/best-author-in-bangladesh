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
            <div class="col my-2 mt-3" style={{width: '320px'}}>
                <div className="card h-100">
                <img src={image} className="card-img-top rounded-circle" alt="..."/>
                <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <h6 class="card-title">Book: {book}</h6>
                <p class="card-text">Rating:
                <Rating
                initialRating={rating}
                emptySymbol="far fa-star far-icon"
                fullSymbol="fas fa-star fas-icon"
                readonly
                /></p>
                <h5 class="card-title">Salary: ${salary}</h5>
                <p>First Publish: {first_publisher}</p>
                </div>
                <div class="card-footer">
                <button onClick={()=>props.displayCartData(props.book)} type="button" class="btn btn-dark">{element} Add to Salary</button>
                </div>
                </div>
              </div>        
        </div>
    );
};

export default Book;