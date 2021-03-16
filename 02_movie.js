class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. I received a rating of ${this.rating}`;
  }
}

const Batman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

console.log(Spiderman);
console.log(Spiderman.getOverview());

console.log(Batman);
console.log(Batman.getOverview());
