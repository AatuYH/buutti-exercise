import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeBook } from '../app/bookSlice';

function Form() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const book = useSelector((state) => state.book.value);
  const dispatch = useDispatch();
  
  const addBook = (data) => {
    const newBook = {
      title: data.title,
      author: data.author,
      description: data.description
    }

    axios.post('http://localhost:3001/create', newBook);
    reset();
  }

  const editBook = (data) => {
    axios.put('http://localhost:3001/edit/' + book.id, {
      title: data.title,
      author: data.author,
      description: data.description
    });
    dispatch(changeBook({id: 0, title: '', author: '', description: ''}));
    reset();
  }

  const deleteBook = (id) => {
    axios.delete('http://localhost:3001/delete/' + id);
    dispatch(changeBook({id: 0, title: '', author: '', description: ''}));
    reset();
  }

  useEffect(() => {
    if(book.id !== 0) {
      setValue('title', book.title);
      setValue('author', book.author);
      setValue('description', book.description);
    }
  })

  return (
    <form>
      <div className='form-group'>
        <label>Title</label><br />
        <input {...register('title', {
          required: true
        })} />
        {errors.title && 'This is required'}
      </div>
      <div className='form-group'>
        <label>Author</label><br />
        <input {...register('author', {
          required: true
        })} />
      </div>
      {errors.author && 'This is required'}
      <div className='form-group'>
        <label>Description</label><br />
        <textarea {...register('description', {
          required: true
        })} />
        {errors.description && 'This is required'}
      </div>
      <button type="button" onClick={handleSubmit(addBook)}>Save New</button>
      <button type="button" disabled={book.id === 0} onClick={handleSubmit(editBook)}>Save</button>
      <button type="button" disabled={book.id === 0} onClick={() => deleteBook(book.id)}>Delete</button>
    </form>
  )
}

export default Form