const addABook = document.getElementById('addABook');
const modal = document.getElementById('modal');
const booksGrid = document.getElementById('booksGrid');
const bookTitleInput = document.getElementById('bookTitleInput');
const bookAuthorInput = document.getElementById('bookAuthorInput');
const bookPagesInput = document.getElementById('bookPagesInput');
const readCheckbox = document.getElementById('readCheckbox');

const submitBtn = document.getElementById('submitBtn');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, readCheckbox.checked)
  myLibrary.push(newBook);

  //Clear form inputs
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookPagesInput.value = '';
  readCheckbox.checked = false;
}

function displayLibrary(){
  for (let i = 0; i < myLibrary.length; i++) {
    //console.log(myLibrary[i]);
    const newBookCard = document.createElement('div');
    newBookCard.className = 'bookCard';

    const title = document.createElement('p');
    title.innerHTML = myLibrary[i].title;
    const author = document.createElement('p');
    author.innerHTML = myLibrary[i].author;
    const pages = document.createElement('p');
    pages.innerHTML = myLibrary[i].pages;
    const readBtn = document.createElement('button');
    if(myLibrary[i].read == true){
      readBtn.innerHTML = "Have read"
    }else{
      readBtn.innerHTML = "Have not read"
        }
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
  }
}

addABook.addEventListener('click', () => {
  modal.style.display = "flex";
});

submitBtn.addEventListener('click', (event) => {
  addBookToLibrary();
  event.preventDefault();
  modal.style.display = "none";
  // Clear booksGrid before displaying the library
  booksGrid.innerHTML = '';
  displayLibrary();
});
