// 1. Write a program to list the properties of an object.
// E.g.
// const student = {
// firstName: "John",
// lastName: "Smith",
// class: 12 };
// Expected Output: firstName, lastName, class
function studentName(){
    console.log(`${this.firstName} ${this.lastName} class: ${this.class}`);
}
const student = {
     firstName: "John",
     lastName: "Smith",
     class: 12,
     studentName: studentName,
    
    };

student.studentName();

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".
function personData(){
    return console.log(`${this.firstName} ${this.lastName} age: ${this.age} job: ${this.job} city: ${this.city}`);
}
const person = {
     firstName: "John",
     lastName: "Smith",
     age: 28,
     job: "web developer",
     city : "Berlin",
     personData: personData,
    
    };

person.personData();
// 3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.
// 4. Write a program to get the length of a JavaScript object.
// 5. Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// const library = [
//   {
//       author: 'J.K. Rowling',
//       title: 'Harry Potter and the Chamber of Secrets',
//       readingStatus: true
//   },
//   {
//       author: 'Homer',
//       title: 'The Odyssey',
//       readingStatus: true
//   },
//   {
//       author: 'Harper Lee',
//       title:  'To Kill a Mockingbird',
//       readingStatus: false
//   }];
// E.g. Output:
// Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
// Already read The Odyssey by Homer
// You still need to read To Kill a Mockingbird by Harper Lee
