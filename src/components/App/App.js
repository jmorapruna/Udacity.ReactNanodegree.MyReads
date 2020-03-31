import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage';
import SearchPage from '../SearchPage/SearchPage';

function BooksApp() {
  return (
    <div className="app">
      <Route exact path="/" render={() => <MainPage />} />
      <Route path="/search" render={() => <SearchPage />} />
    </div>
  );
}

export default BooksApp;
