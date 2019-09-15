import React, { Component } from 'react';

class Item extends Component {
  render() {
    console.log(this.props.book.volumeInfo.subtitle)
    return (
      <div className="Item">
        <h2>{this.props.book.volumeInfo.title}</h2>
        <p>Author: {this.props.book.volumeInfo.authors.join(" and ")}</p>
        <p>{this.props.book.volumeInfo.subtitle}</p>
      </div>
    );
  }
}

export default Item;