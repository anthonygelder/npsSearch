import React, { Component } from 'react';
import Item from '../Item/Item';


class List extends Component {
  
  render() {
    const booksArray = this.props.books;
    // console.log(this.props.books)
    const booksResult = booksArray.map((item, i) => {
      // console.log(item)
      return <Item book={item} key={i}/>;
    })
  

    return (
      <div className="List">
        { booksResult }
      </div>
    );
  }
}

List.defaultProps = {
  books: []
}

export default List;