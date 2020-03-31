import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from '../BooksList/BooksList';
import BookSearch from '../BookSearch/BookSearch';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BooksList} />
        <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp;
