# DOM Tasks 

## The Book List
Create a webpage with an h1 of "My Book List".
Given an array of books, example:

```javascript
    const books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
```
  
* Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
**Bonuses:**
* Use a ul and li to display the books.
* Add an img to each book that links to a URL of the book cover.
* Change the style of the book depending on whether you have read it or not.


## About Me
Start with some base HTML":

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>About Me</title>
    </head>
    <body>
      <h1>About Me</h1>

      <ul>
        <li>Nickname: <span id="nickname"></span>
        <li>Favorites:  <span id="favorites"></span>
        <li>Hometown: <span id="hometown"></span>
      </ul>
    </body>
  </html>
```

* In JavaScript, change the body tag's style so it has a font-family of "Arial, sans-serif".
* In JavaScript, replace each of the spans (nickname, favorites, hometown) with your own information.
* Iterate through each li and change the class to "list-item".
* Add a style tag that sets a rule for .list-item to make the color red.
* Create a new img element and set its src attribute to a picture of you. Append that element to the page.

