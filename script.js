const addABook = document.getElementById('addABook');
const modal = document.getElementById('modal');
const booksGrid = document.getElementById('booksGrid');
const bookTitleInput = document.getElementById('bookTitleInput');
const bookAuthorInput = document.getElementById('bookAuthorInput');
const bookPagesInput = document.getElementById('bookPagesInput');
const readCheckbox = document.getElementById('readCheckbox');
const modalOverlay = document.querySelector('.modal-overlay');
const submitBtn = document.getElementById('submitBtn');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

closeModal();

//brings up book info form 
addABook.addEventListener('click', () => {
  modal.style.display = "flex";
  openModal();
});

//add book to library array with user input data
function addBookToLibrary() {
  const newBook = new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, readCheckbox.checked)
  myLibrary.push(newBook);

  //Clear form inputs
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookPagesInput.value = '';
  readCheckbox.checked = false;
}

//triggers addBookToLibrary Function, hides form modal, refreshes library display
submitBtn.addEventListener('click', (event) => {
  addBookToLibrary();
  event.preventDefault();
  modal.style.display = "none";
  closeModal();
  updateDisplay();
});

//creates book card for each book in library array & displays
function displayLibrary(){
  for (let i = 0; i < myLibrary.length; i++) {
    //create book card elements
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
    if(myLibrary[i].read == true){
      readBtn.classList.add('read');
    }else{
      readBtn.classList.add('notRead');
        }
    readBtn.id = "readBtn";
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    deleteBtn.id = 'deleteBtn';
    deleteBtn.setAttribute('data-id', i);
    readBtn.setAttribute('data-id', i);

    //Event listener for delete button
    deleteBtn.addEventListener('click', function() {
      const dataId = this.getAttribute('data-id');
      myLibrary.splice(dataId, 1);
      updateDisplay();
    });

    //Event listener for read button - update 'read' status
    readBtn.addEventListener('click', function() {
      const dataId = this.getAttribute('data-id');
    if (myLibrary[dataId].read == true) {
      myLibrary[dataId].read = false;
      readBtn.classList.remove('read');
      readBtn.classList.add('notRead');
    } else {
      myLibrary[dataId].read = true;
      readBtn.classList.remove('notRead');
      readBtn.classList.add('read');
    }
  updateDisplay();
    });

    newBookCard.appendChild(title);
    newBookCard.appendChild(author);
    newBookCard.appendChild(pages);
    newBookCard.appendChild(readBtn);
    newBookCard.appendChild(deleteBtn);
    booksGrid.appendChild(newBookCard);
  }
}

//triggers addBookToLibrary Function, hides form modal, refreshes library display
submitBtn.addEventListener('click', (event) => {
  updateDisplay();
});

function updateDisplay(){
  // Clear booksGrid before displaying the updated library
  booksGrid.innerHTML = '';
  displayLibrary();
}

function openModal() {
  modalOverlay.classList.add('modal-overlay');
  // ...other code to show the modal
}

function closeModal() {
  modalOverlay.classList.remove('modal-overlay');
  // ...other code to hide the modal
}