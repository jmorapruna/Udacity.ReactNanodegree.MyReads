import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import * as BookAPI from '../../services/BooksAPI';

function BookShelf({ name, books, changeBookshelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => (<li key={book.id}>
              <Book book={book} changeBookshelf={changeBookshelf} />
            </li>))
          }
        </ol>
      </div>
    </div>
  );
}

class MainPage extends Component {
  state = {
    books: [],
  }

  async componentDidMount() {
    let books = [];
    try {
      books = await BookAPI.getAll();
    } catch (e) {}

    this.setState({
      books
    });
  }

  changeBookshelf = async (book, shelf) => {
    try {
      await BookAPI.update(book, shelf);

      this.setState(state => ({
        ...state,
        books: state.books.map(b => book === b ?
          { ...b, shelf }
          : b)
      }));
    } catch (e) {}
  }

  render() {
    const { books } = this.state;
    const currentlyReadingBooks = books.filter(b => b.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter(b => b.shelf === 'wantToRead');
    const readBooks = books.filter(b => b.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf name="Currently Reading" books={currentlyReadingBooks} changeBookshelf={this.changeBookshelf} />
            <BookShelf name="Want to Read" books={wantToReadBooks} changeBookshelf={this.changeBookshelf} />
            <BookShelf name="Read" books={readBooks} changeBookshelf={this.changeBookshelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
