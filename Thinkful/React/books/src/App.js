import React, { Component } from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import List from './List/List';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  handleBooks(data) {
    console.log(data.items)
    this.setState({
      books: data.items
    })
  }

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <Search books={this.state.books}
                handleAdd={data => this.handleBooks(data)}/>
        <Filter />
        <List books={this.state.books}/>
      </main>
    );
  }
}

export default App;