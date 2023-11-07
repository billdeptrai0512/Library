class Book {

  constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
  }

  showBook() {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.textContent = this.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = this.author;
    bookCard.appendChild(bookAuthor);

    const bookPage = document.createElement('p');
    bookPage.className = 'book-title';
    bookPage.textContent = this.page;
    bookCard.appendChild(bookPage);

    const bookRead = document.createElement('button');
    bookRead.className = 'book-read';
    if (this.status === true) {
      bookRead.classList.add('done')
      bookRead.textContent = "Read"
    } else {
      bookRead.classList.remove('done')
      bookRead.textContent = "Not Read"
    } 
    bookCard.appendChild(bookRead)

    bookRead.addEventListener('click', () => {
      this.status = (!this.status);
      if (this.status == true) {
        bookRead.classList.add('done');
        bookRead.textContent = "Read";
      } else {
        bookRead.classList.remove('done');
        bookRead.textContent = "Not Read"
      }
    })
    
    const bookRemove = document.createElement('button');
    bookRemove.className = 'book-remove';
    bookRemove.textContent = "Remove";
    bookCard.appendChild(bookRemove);

    bookRemove.addEventListener('click', () => {
      bookCard.remove();
      myLibrary.splice(myLibrary.indexOf('${book.title}'), 1);
    });

    bookGrid.appendChild(bookCard);

  }
  
}

let myLibrary = [];

const showButton = document.getElementById("button");
const diaLog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = diaLog.querySelectorAll('input');
const confirmButton = diaLog.querySelector('button');
const bookGrid = document.querySelector('.book-grid');
const checkBox = diaLog.querySelector('#read');


showButton.addEventListener('click', () => {
  diaLog.showModal();
})

confirmButton.addEventListener('click', (e) => {
  e.preventDefault();
  let book = new Book(title.value, author.value, page.value, read.checked);
  myLibrary.push(book);
  book.showBook();
  form.reset();
  diaLog.close();
})


// function Book(title, author, page, status) {
//   this.title = title;
//   this.author = author;
//   this.page = page;
//   this.status = status;
//   // the constructor...
// }

// function addBookToLibrary() {
//   bookGrid.innerHTML = '';
//   for (let i = 0; i < myLibrary.length; i++) {
//     showBook(myLibrary[i]);
//   }
// }

// function showBook(book) {
//   const bookCard = document.createElement('div');
//   bookCard.className = 'book-card';
  
//   const bookTitle = document.createElement('p');
//   bookTitle.className = 'book-title';
//   bookTitle.textContent = book.title;
//   bookCard.appendChild(bookTitle);

//   const bookAuthor = document.createElement('p');
//   bookAuthor.className = 'book-author';
//   bookAuthor.textContent = book.author;
//   bookCard.appendChild(bookAuthor);

//   const bookPage = document.createElement('p');
//   bookPage.className = 'book-title';
//   bookPage.textContent = book.page;
//   bookCard.appendChild(bookPage);

//   const bookRead = document.createElement('button');
//   bookRead.className = 'book-read';
//   if (book.status === true) {
//     bookRead.classList.add('done')
//     bookRead.textContent = "Read"
//   } else {
//     bookRead.classList.remove('done')
//     bookRead.textContent = "Not Read"
//   } 


//   bookCard.appendChild(bookRead)

//   bookRead.addEventListener('click', () => {
//     book.status = (!book.status);
//     if (book.status == true) {
//       bookRead.classList.add('done');
//       bookRead.textContent = "Read";
//     } else {
//       bookRead.classList.remove('done');
//       bookRead.textContent = "Not Read"
//     }
//   })

//   const bookRemove = document.createElement('button');
//   bookRemove.className = 'book-remove';
//   bookRemove.textContent = "Remove";
//   bookCard.appendChild(bookRemove);

//   bookRemove.addEventListener('click', () => {
//     bookCard.remove();
//     myLibrary.splice(myLibrary.indexOf('${book.title}'), 1);
//   });

//   bookGrid.appendChild(bookCard);
// }





