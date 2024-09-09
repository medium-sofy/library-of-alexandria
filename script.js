//1- Array of objects containing the books to be displayed
const myLibrary = [{
  author:'Ahmed',
  title: 'Unnatural',
  pages: 103,
  read: true
},{
  author:'Hassan',
  title:'The Butcher',
  pages: 259,
  read: true
}];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
}