import React, { Component } from 'react';

class Results extends Component {
  render() {
    let bookList = this.props.results.map((book, key) => {
      return (
        <li key={book.volumeInfo.title}>
          <h2>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.authors[0]}</h3>

          <p>{book.volumeInfo.description}</p>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        </li>
      );
    });

    return (
      <article>
        <ul>{bookList}</ul>
      </article>
    );
  }
}

export default Results;
