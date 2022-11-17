import Book from './modules/Book.js';
import UI from './modules/UI.js';
import Store from './modules/Store.js';

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book to a collection
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // VAlidates
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in the fields', 'danger');
  } else {
  // Instantiate a book:
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add to lcalstoragelist
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a book from a collection

document.querySelector('#book-list').addEventListener('click', (e) => {
// Remove book from UI
  UI.deleteBook(e.target);
  // Remove Book from LocalStorage
  Store.reomveBook(e.target.parentElement.previousElementSibling.textContent);
  // Show success message
  UI.showAlert('Book removed', 'success');
});