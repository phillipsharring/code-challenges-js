class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (0 === this.numCopies) {
      return "out of stock";
    } else if (10 > this.numCopies) {
      return "low stock";
    }

    return "in stock";
  }

  sell(numSold) {
    if (!numSold) {
      numSold = 1;
    }
    this.numCopies -= numSold;
  }

  restock(numCopies) {
    if (!numCopies) {
      numCopies = 1;
    }
    this.numCopies += numCopies;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
