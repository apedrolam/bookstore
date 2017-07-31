import React from 'react';
import './AddBookForm.css';
import Genre from '../Genre/Genre';

class AddBookForm extends React.Component {
    constructor() {
        super();
        this.state = {
            genres: {}
        };
    }
    createBook(event) {
        event.preventDefault();
        
        const book = {
            name: this.name.value,
            price: this.price.value,
            genre: this.genre.value
        }
        this.props.addBook(book);
        this.bookForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.bookForm = input} className="add-book-form" onSubmit={(e) => this.createBook(e)}>
                <fieldset>
                    <legend>Add a book</legend>
                    <input ref={(input) => this.name = input} type="text" placeholder="Name of the book" />
                    <input ref={(input) => this.price = input} type="text" placeholder="Price" />
                    <select ref={(input) => this.genre = input}>
                        {
                            Object
                                .keys(this.state.genres)
                                .map(key => <Genre key={key} details={this.state.genres[key]} />)
                        }
                    </select>
                    <button type="submit">+ Add</button>
                </fieldset>
            </form>
        )
    }
}

export default AddBookForm;