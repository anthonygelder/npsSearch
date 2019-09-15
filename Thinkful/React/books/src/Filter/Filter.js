import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
        <div className="Filter">
            <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="print_type">Print type:</label>
                    <select
                        name="print_type"
                        id="print_type">
                    </select>
                    <label htmlFor="book_type">Book Type:</label>
                    <select
                        name="book_type"
                        id="book_type">
                    </select>
                </form>
        </div>
        );
    }
}

export default Filter;