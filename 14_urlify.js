function urlify(str) {
  return str
    .replace(/[^a-z\s]/gi, "")
    .trim()
    .replace(/\s/g, "-")
    .replace(/-{2,}/g, "-")
    .toLowerCase();
}

const titles = [
  " My blog name!  ",
  "   Emma's blog ",
  "          Phil's Amazingly 'coooool...'           blog!           ;)         ",
];

titles.forEach((title) => {
  console.log(urlify(title));
});
