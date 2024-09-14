//1- Array of objects containing the books to be displayed
/**
 * {
    author: "Ahmed",
    title: "Unnatural",
    pages: 103,
    read: true,
  },
  {
    author: "Hassan",
    title: "The Butcher",
    pages: 259,
    read: true,
  },
 */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function(){
  this.read === "Yes" ? this.read = "No" : this.read = "Yes"
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
  myLibrary.forEach((item, index) => {
    displayBook(item, index);
  });
}

displayBooks();

const dialog = document.querySelector("dialog");
const inputForm = document.querySelector("#new-book-form");
const newBook = document.querySelector(".new-book");

newBook.addEventListener("click", () => {
  dialog.show();
});

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Change input form widgets for no. of pages to be number based & read status to be radio buttons
  const formData = new FormData(inputForm);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");
  addBookToLibrary(title, author, pages, read);
  displayBook(undefined, myLibrary.length - 1);
  dialog.close();
});

function displayBook(item, index) {
  console.log(index);
  index == undefined ? (index = 0) : index;
  item == undefined ? (item = myLibrary[myLibrary.length - 1]) : item;

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", index);

  const title = document.createElement("span");
  title.innerHTML = `<span class='card-identifier'>Title:</span> ${item.title}`;

  const author = document.createElement("span");
  author.innerHTML = `<span class='card-identifier'>Author:</span> ${item.author}`;

  const pages = document.createElement("span");
  pages.innerHTML = `<span class='card-identifier'>No. of pages:</span> ${item.pages}`;

  const read = document.createElement("span");
  read.innerHTML = `<span class='card-identifier'>Read:</span> ${item.read}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("black-button");
  removeButton.textContent = "Remove";

  const readButton = document.createElement("button");
  readButton.classList.add('black-button')
  readButton.textContent = 'Read'

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button-container')

  // should change this later to dynamicly change the wording depending on the read status of the book: "Read" , "Didn't read"

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);

  buttonContainer.appendChild(removeButton)
  buttonContainer.appendChild(readButton)
 
  card.appendChild(buttonContainer)
  const container = document.querySelector(".card-container");
  container.appendChild(card);

  console.log(card.getAttribute("data-index"));

  console.log("displayBook Library:", myLibrary);

  removeButton.addEventListener("click", () => {
    myLibrary.splice(+card.getAttribute("data-index"), 1);
    container.textContent = "";
    displayBooks();
    console.log("removeButton Library: ", myLibrary);
  });

  readButton.addEventListener('click',()=>{
    const book = myLibrary[card.getAttribute('data-index')]
    book.toggleRead()
    container.textContent = "";
    displayBooks()
  })
}
