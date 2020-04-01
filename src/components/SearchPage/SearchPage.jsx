import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import * as BookAPI from '../../services/BooksAPI';
import debounce from 'lodash/debounce'

class SearchPage extends Component {

  state = {
    searchText: '',
    foundBooks: [],
  }

  changeBookshelf = async (book, shelf) => {
    await BookAPI.update(book, shelf);

    this.setState(state => ({
      ...state,
      foundBooks: state.foundBooks.map(b => book === b ?
        { ...b, shelf }
        : b)
    }));
  };

  searchChanged = debounce(async (text) => {
    let foundBooks = [];

    if (text) {
      try {
        const result = await BookAPI.search(text);

        if (!result.error)
          foundBooks = result;

      } catch (e) { }
    }

    this.setState({
      foundBooks
    });
  }, 300);

  handleSearch = (searchText) => {
    this.setState({
      searchText,
    });

    this.searchChanged(searchText);
  }

  render() {
    const { searchText, foundBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchText}
              onChange={e => this.handleSearch(e.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              foundBooks.map(book => (<li key={book.id}>
                <Book book={book} changeBookshelf={this.changeBookshelf} />
              </li>))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
