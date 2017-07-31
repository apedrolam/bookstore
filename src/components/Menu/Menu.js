import React from 'react';
import AddBookForm from '../AddBookForm/AddBookForm';
import AddGenreForm from '../AddGenreForm/AddGenreForm';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-wrapper">
        <ul>
          <AddBookForm addBook={this.props.addBook} addGenre={this.props.addGenre}/>
          <AddGenreForm addGenre={this.props.addGenre}/>
          <button onClick={this.props.loadSamples}>Load Sample Books</button>
        </ul>
      </div>
    )
  }
}

export default Menu;
