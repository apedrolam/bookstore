import React from 'react';
import './AddGenreForm.css';

class AddGenreForm extends React.Component {
    createGenre(event) {
        event.preventDefault();
        
        const genre = {
            genre: this.genre.value
        }
        this.props.addGenre(genre);
        this.genreForm.reset();
    }
    
    render() {
        return (
            <form ref={(input) => this.genreForm = input} className="add-genre-form" onSubmit={(e) => this.createGenre(e)}>
                <fieldset>
                    <legend>Add Genre</legend>
                    <input ref={(input) => this.genre = input} type="text" placeholder="Genre" />
                    <button type="submit">+ Add Genre</button>
                </fieldset>
            </form>
        )
    }
}

export default AddGenreForm;