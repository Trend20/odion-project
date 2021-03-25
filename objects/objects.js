// OBJECTS
// define an object using an object literal

// const person ={
//     "name":"james",
//     "age": 23,
//     isMarried: true,
//     "location": "Nairobi"
// }

// retrieve object property

// dot notation
// person.location
// Nairobi

// bracket notation
// person["location"] 
// Nairobi

// creating objects using the OBJECT CONSTRUCTORS
//  function person(name, age, location, isMarried){
//      this.name = name;
//      this.age = age;
//      this.location = location;
//      this.isMarried = isMarried;
//  }

// //  to call the fucntion, use the keyword "new"
// const firstPerson = new person("David", 30, "Kisumu", false);
// console.log(firstPerson);

// EXERCISE
// // Write a constructor for making “Book” objects. 
// We will revisit this in the project at the end of this lesson. Your book objects should 
// have the book’s title, author, the number of pages, and whether or not you have read the book
// function Book(title, author, pages, isRead){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//     this.reportBook = function(info){
//         console.log(reportBook.info);
//     }
// }


// const bookOne = new Book("In the Shadow", "Mike", 12, true);
// console.log(bookOne);
