import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <li className="list-book-item">
                <p><strong>Title:</strong> {details.name} </p>
                <p><strong>Price:</strong> {details.price}€ </p>
                <p><strong>Genre:</strong> {details.genre} </p>
            </li>
        )
    }
}

export default Book;