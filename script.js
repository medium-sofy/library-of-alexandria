//1- Array of objects containing the books to be displayed

const myLibrary = [
  {
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
];

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

//3 - Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function displayBooks() {
  myLibrary.map((item) => {
    displayBook(item);
  });
}
displayBooks();
// TO-DO: Add dialog to enter new book's data
const dialog = document.querySelector("dialog");
const myForm = document.querySelector("#my-form");
const newBook = document.querySelector(".new-book");

newBook.addEventListener("click", () => {
  dialog.show();
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(myForm);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");
  addBookToLibrary(title, author, pages, read);
  displayBook();
  dialog.close();
});

function displayBook(item) {
  item == undefined ? (item = myLibrary[myLibrary.length - 1]) : item;
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("span");
  title.textContent = `Title: ${item.title}`;

  const author = document.createElement("span");
  author.textContent = `Author: ${item.author}`;

  const pages = document.createElement("span");
  pages.textContent = `No. of pages: ${item.pages}`;

  const read = document.createElement("span");
  read.textContent = `Read: ${item.read}`;

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);

  const container = document.querySelector(".card-container");
  container.appendChild(card);
}