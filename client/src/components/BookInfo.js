import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeBook } from '../app/bookSlice';

function BookInfo(props) {
	const book = useSelector((state) => state.book.value);
	const dispatch = useDispatch();

	return (
		<ListGroupItem active={book.id === props.book._id} onClick={() => {
			if(book.id === props.book._id) {
				dispatch(changeBook({id: 0, title: '', author: '', description: ''}));
			} else {
				dispatch(changeBook({id: props.book._id, title: props.book.title, author: props.book.author, description: props.book.description}));
			}
		}}>
		  {props.book.title}<br />
		  {props.book.author}
		</ListGroupItem>
	)
}

export default BookInfo