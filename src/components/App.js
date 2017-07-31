import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Inventory from './Inventory/Inventory';
import sampleBooks from '../sample-books';
import Book from './Book/Book';
import GenreFilter from './GenreFilter/GenreFilter';

import './App.css';

class App extends Component {
  constructor() {
        super();

        this.addBook = this.addBook.bind(this);
        this.addGenre = this.addGenre.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        this.state = {
            books: {},
            genres: {
              genre0: {genre: 'All'},
              genre1: {genre: 'Comic'},
              genre2: {genre: 'Fantasy'},
              genre3: {genre: 'Historic'}
            }
        };
  }

  addBook(book) {
        //update our state
        const books = {...this.state.books};
        //add in a new book
        const timestamp = Date.now();
        books[`book-${timestamp}`] = book;
        //set state
        this.setState({ books: books });
  }

  addGenre(genre) {
        //update our state
        const genres = {...this.state.genres};
        //add in a new genre
        const timestamp = Date.now();
        genres[`genre-${timestamp}`] = genre;
        //set state
        this.setState({ genres: genres });
    }

    loadSamples() {
        this.setState({
            books: sampleBooks
        });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo/>
          <Menu addBook={this.addBook} addGenre={this.addGenre} loadSamples={this.loadSamples}/>
          <ul className="Genre-filter">
            {
              Object
                .keys(this.state.genres)
                .map(key => <GenreFilter key={key} details={this.state.genres[key]} />)
            }
          </ul>
        </div>
        <div className="App-content">
          <Inventory/>
          <ul>
              {
                  Object
                      .keys(this.state.books)
                      .map(key => <Book key={key} details={this.state.books[key]} />)
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
