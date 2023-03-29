const addABook = document.getElementById('addABook');
const modal = document.getElementById('modal');
// const inputForm = document.getElementById('inputForm');
const bookTitleInput = document.getElementById('bookTitleInput');
const bookAuthorInput = document.getElementById('bookAuthorInput');
const bookPagesInput = document.getElementById('bookPagesInput');
const bookReadInput = document.getElementById('bookReadInput');

const addNewBook = document.getElementById('submitBtn');
const booksGrid = document.getElementById('booksGrid');
const titleOutput = 'title PH';
const authorOutput = 'author PH';
const pagesOutput = 'pages PH';
const readOutput = 'Not yet read PH';

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

addABook.addEventListener('click', () => {
  modal.style.display = "flex";
});

addNewBook.addEventListener('click', () => {
  // modal.style.display = "none";
  const newBookCard = document.createElement('div');
  newBookCard.className = 'bookCard';

  const title = document.createElement('p');
  title.innerHTML = titleOutput;
  const author = document.createElement('p');
  author.innerHTML = authorOutput;
  const pages = document.createElement('p');
  pages.innerHTML = pagesOutput;
  const readBtn = document.createElement('button');
  readBtn.innerHTML = readOutput;
  readBtn.id = "readBtn";
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
