import React, { Component } from 'react';
import './GenreFilter.css';

class GenreFilter extends Component {
    render() {
        const { details } = this.props;
        return (
            <li className="Genre-filter-item">{details.genre}</li>
        )
    }
}

export default GenreFilter;