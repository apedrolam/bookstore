import React, { Component } from 'react';

class Genre extends Component {
    render() {
        const { details } = this.props;
        return(
            <option value={details.genre}>{details.genre}</option>
        )
    }
}

export default Genre;