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

 // option to include lowercase characters     
   var lowercaseCharsSet = prompt("Include lowercase characters?");
        if(lowercaseCharsSet) {
            passwordChars += lowcaseChars;
        }
   // option to include uppercase characters 
   var uppercaseCharsSet = prompt("Include uppercase characters?");
        if(uppercaseCharsSet) {     
            passwordChars += uppcaseChars;
        }
   // option to include numercial characters
   var numCharsSet = prompt("Include numerical characters?");
        if(numCharsSet) {
            passwordChars += numChars;
        }
   // option to include special characters
   var specialCharsSet = prompt("Include special characters?");
        if(specialCharSet) {
            passwordChars += specialCharsSet;
        }

// displays generated password        
function writePassword() {
    var newPass = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
