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

//3 - Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

myLibrary.map((item)=>{
  const card = document.createElement('div')
  card.classList.add('card')
  
  const author = document.createElement('span')
  author.textContent = `Author: ${item.author}`
  
  const title = document.createElement('span')
  title.textContent = `Title: ${item.title}`
  
  const pages = document.createElement('span')
  pages.textContent = `No. of pages: ${item.pages}`
  
  const read = document.createElement('span')
  read.textContent = `Read: ${item.read}`
  
  card.appendChild(title)
  card.appendChild(author)
  card.appendChild(pages)
  card.appendChild(read)
  
  const container = document.querySelector('.card-container')
  container.appendChild(card)
  })
  
  // TO-DO: Add dialog to enter new book's data