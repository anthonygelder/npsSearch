import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    
    searchChanged = (value) => {
        this.setState({value: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.state.value;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle&key=AIzaSyCiv03ah7ZjCY_Nx6S6ZFnrX32ThZX6_-w`
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
            })
            .then(data => {
            this.props.handleAdd(data);
            })
            .catch(err => {
            this.setState({
                error: err.message
            });
        });
    }
    
    render() {
        return (
        <div className="Search">
            <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="search">Search:</label>
                <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                value={this.state.search}
                onChange={e => this.searchChanged(e.target.value)}
                />
                <button type="submit" >Search</button>
            </form>
        </div>
        );
    }
}

export default Search;