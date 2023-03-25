const addNewBook = document.getElementById('addNewBook');
const booksGrid = document.getElementById('booksGrid');
const titleInput = 'title PH';
const authorInput = 'author PH';
const pagesInput = 'pages PH';
const readInput = 'Not yet read PH';

const myLibrary = [];

function Book(title, author, pages) {
  this.tile = title;
  this.author = author;
  this.pages = pages;
}

// Examples of books
const bookOne = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 581);
const bookTwo = new Book('Atomic Habits', 'James Clear', 340);
const bookThree = new Book('How to Win Friends & Influence People', 'Dale Carnegie', 222);

function addBookToLibrary() {
  // do stuff here
}

addNewBook.addEventListener('click', () => {
  const newBookCard = document.createElement('div');
  newBookCard.className = 'bookCard';

  const title = document.createElement('p');
  title.innerHTML = titleInput;
  const author = document.createElement('p');
  author.innerHTML = authorInput;
  const pages = document.createElement('p');
  pages.innerHTML = pagesInput;
  const readBtn = document.createElement('button');
  readBtn.innerHTML = readInput;
  readBtn.id = 'readBtn';
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'delete';
  deleteBtn.id = 'deleteBtn';

  newBookCard.appendChild(title);
  newBookCard.appendChild(author);
  newBookCard.appendChild(pages);
  newBookCard.appendChild(readBtn);
  newBookCard.appendChild(deleteBtn);

  booksGrid.appendChild(newBookCard);
});
