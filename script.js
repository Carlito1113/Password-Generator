// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Character arrays
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

var specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]


function generatePassword() {
  var pCharacter = prompt("How many characters do you want?");
  // empty array
  var emptyArr = [];
  // loop which re-prompts user if character condition is not met
  while (pCharacter < 7 || pCharacter > 128) {
    alert("Password must be between 8 and 128 characters.");
    var pCharacter = prompt("How many characters do you want?");
  }
  // if statements for the user to choose their passwords characters
  if (pCharacter > 7 && pCharacter < 129) {

    var upper = confirm("Do you want uppercase letters?");
    if (upper) {
      emptyArr.push(...upperArr);
      console.log(emptyArr);
    }

    var lower = confirm("Do you want lowercase letters?");
    if (lower) {
      emptyArr.push(...lowerArr);
      console.log(emptyArr);
    }

    var num = confirm("Do you want numbers?");
    if (num) {
      emptyArr.push(...numArr);
      console.log(emptyArr);
    }

    var specChar = confirm("Do you want special characters?")
    if (specChar) {
      emptyArr.push(...specialArr);
      console.log(emptyArr);
    }

    for (var p = 0; p < pCharacter; p++) {
      password.push(emptyArr[Math.floor(Math.random() * emptyArr.length)]);
    }
    // empty password array
   var password = [];

  }
}

