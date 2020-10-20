// variables representing selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var copyBtn = document.querySelector("#copy");

// character codes that will make the base for the generated password
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChars = "0123456789";
let special = " !@#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
