const username = Symbol("username");
const password = Symbol("password");

class User {
  #username;
  #password;
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
  }
}

// const Phil = new User("phillipsharring", "dog1cat", 47);

const Phil = {
  [username]: "phillipsharring",
  [password]: "dog1cat",
};

console.log(Phil);
console.log(Phil.username);
console.log(Phil.password);
