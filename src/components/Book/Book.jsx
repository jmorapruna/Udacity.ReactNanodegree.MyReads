import React from 'react';

function Book({ book, changeBookshelf }) {
  const { title, authors = [], imageLinks, shelf } = book;

  const imageUrl = (imageLinks && imageLinks.smallThumbnail) || undefined;
  const backgroundImage = imageUrl ? `url(${imageUrl})` : undefined;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, minHeight: 192, backgroundImage }}></div>
        <div className="book-shelf-changer">
          <select value={shelf || "none"} onChange={(e) => changeBookshelf(book, e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {
          authors.map(author => <p key={author}>{author}</p>)
        }
      </div>
    </div>
  );
}

export default Book;
