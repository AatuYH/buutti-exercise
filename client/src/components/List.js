import React, { useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import { ListGroup } from 'react-bootstrap';

function List() {
  const [books, setBooks] = useState([{
    title: '',
    author: '',
    description: ''
  }]);

  useEffect(() => {
    fetch('/books').then(res => {
      if(res.status >= 400) {
        throw new Error('Server responds with error!');
      }
      return res.json();
    }).then(jsonRes => setBooks(jsonRes));
  })

  return (
    <ListGroup>
      {books.map((book, i) =>
        <BookInfo key={i} book={book} />
        )}
    </ListGroup>
  )
}

export default List