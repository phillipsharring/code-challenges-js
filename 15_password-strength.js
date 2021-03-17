function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;
  let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);
  const valid = isValid ? "valid" : "invalid";
  return `Your password is ${valid}`;
}

const passwords = ["dog1cat", "V*L1dP@s5W04d!"];

passwords.forEach((password) => {
  console.log(checkPassword(password));
});
