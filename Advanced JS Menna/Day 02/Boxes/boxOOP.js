var Box = function (height, width, boxLength, material) {
  if (
    !Number.isFinite(height) ||
    height <= 0 ||
    !Number.isFinite(width) ||
    width <= 0 ||
    !Number.isFinite(boxLength) ||
    boxLength <= 0
  ) {
    throw new TypeError(
      "height, width and boxLength must be numbers greater than 0",
    );
  }
  this.height = height;
  this.width = width;
  this.boxLength = boxLength;
  this.material = material;
  var books = [];
  this.addBook = function (book) {
    if (!(book instanceof Book)) {
      throw new TypeError("Only Book objects can be added to the box");
    }
    books.push(book);
  };
  this.deleteBook = function (toDelete) {
    const lengthBeforeDelete = books.length;
    for (var i = books.length - 1; i >= 0; i--) {
      if (books[i].name === toDelete || books[i].author === toDelete) {
        books.splice(i, 1);
      }
    }
    // if the length was the same before and after then there were no deletions
    if (lengthBeforeDelete === books.length) {
      console.log("Not found");
    }
  };
  this.displayBooks = function () {
    console.log(books);
  };
  this.countBooks = function () {
    return books.length;
  };
};

Box.prototype.calcVolume = function () {
  return this.length * this.height * this.width;
};

var Book = function (
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies,
) {
  this.title = title;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numofPages = numofPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
};
const box = new Box(15, 20, 10, "any");
var book1 = new Book(
  "The Silent Code",
  12,
  "Liam Carter",
  320,
  "Nova Press",
  5,
);

var book2 = new Book(
  "Midnight Algorithms",
  18,
  "Sara Bennett",
  450,
  "Blue Horizon Publishing",
  9,
);

var book3 = new Book(
  "Beyond the Stack",
  9,
  "Omar Khaled",
  210,
  "TechLeaf House",
  3,
);
box.addBook(book1);
box.addBook(book2);
box.addBook(book3);
box.displayBooks();
console.log(box.countBooks());
