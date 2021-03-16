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
