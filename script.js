// variables representing selectors
var generateBtn = document.querySelector("#generate");

// character codes that will make the base for the generated password
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChars = "0123456789";
let special = " !@#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// function to generate password
function generatePassword() {
   var newPass = "";
   var passwordChars = "";
   // alert user to inputting length of password
   var passLength = alert("Number of characters your password will contain?");
        // user must enter a number that is between 8-128 for length of password for validation
        if(Number(passLength > 8) | Number(passLength < 128)) {
            for (var i = 0); i < passLength; i++)
                newPass += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
            prompt("Please enter a number between 8 and 128 characters");
        }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
