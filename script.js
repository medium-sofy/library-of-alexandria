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
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((item,index) => {
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

  const formData = new FormData(inputForm);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");
  addBookToLibrary(title, author, pages, read);
  displayBook(undefined,myLibrary.length-1);
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
  title.textContent = `Title: ${item.title}`;

  const author = document.createElement("span");
  author.textContent = `Author: ${item.author}`;

  const pages = document.createElement("span");
  pages.textContent = `No. of pages: ${item.pages}`;

  const read = document.createElement("span");
  read.textContent = `Read: ${item.read}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("black-button");
  removeButton.textContent = "Remove";

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(removeButton);

  const container = document.querySelector(".card-container");
  container.appendChild(card);

  console.log(card.getAttribute("data-index"));

  console.log("displayBook Library:", myLibrary);

  removeButton.addEventListener("click", () => {
    myLibrary.splice(+card.getAttribute("data-index"), 1);
    container.innerHTML = "";
    displayBooks();
    console.log("removeButton Library: ", myLibrary);
  });
}
