# MyReads: A Book Lending App

This project is part of the Udacity React Nanodegree.

The project has been created from scratch using [Create React App](https://github.com/facebookincubator/create-react-app), and then merged with the [Starter Code for the React MyReads Project
](https://github.com/udacity/reactnd-project-myreads-starter.git).

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md
├── SEARCH_TERMS.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
    │   ├── App # Responsible for rendering the each page using react-router-dom
    │   │   ├── App.css
    │   │   └── App.js
    │   ├── Book # A function component that renders a book and delegates bookshelf changes to parent components
    │   │   ├── Book.css
    │   │   └── Book.jsx
    │   ├── MainPage # A class component responsible for displaying the three bookshelves
    │   │   ├── MainPage.css
    │   │   └── MainPage.jsx
    │   └── SearchPage # A class component responsible for the search features
    │       ├── SearchPage.css
    │       └── SearchPage.jsx
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles
    ├── index.js
    ├── serviceWorker.js
    ├── services
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend
    └── setupTests.js

```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
