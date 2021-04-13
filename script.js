// Assignment Code
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Character arrays
const upperArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lowerArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialArr = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];
// Password generation function
function generatePassword() {
  const pCharacter = prompt('How many characters do you want?');
  // empty array
  const emptyArr = [];
  // loop which re-prompts user if character condition is not met
  while (pCharacter < 8 || pCharacter > 128) {
    alert('Password must be between 8 and 128 characters.');
    const pCharacter = prompt('How many characters do you want?');
  }
  // if statements for the user to choose their passwords characters
  if (pCharacter > 7 && pCharacter < 129) {
    const upper = confirm('Do you want uppercase letters?');

    // uppercase array if statement
    if (upper === true) {
      emptyArr.push(...upperArr);
      console.log(emptyArr);
    }

    const lower = confirm('Do you want lowercase letters?');

    // lowercase array if statement
    if (lower === true) {
      emptyArr.push(...lowerArr);
      console.log(emptyArr);
    }

    const num = confirm('Do you want numbers?');

    // number array if statement
    if (num === true) {
      emptyArr.push(...numArr);
      console.log(emptyArr);
    }

    const specChar = confirm('Do you want special characters?');

    // special character array if statement
    if (specChar === true) {
      emptyArr.push(...specialArr);
      console.log(emptyArr);
    }
    // empty password array
    let password = [];
    // for loop for random number selection
    for (let p = 0; p < pCharacter; p++) {
      password.push(emptyArr[Math.floor(Math.random() * emptyArr.length)]);
    }
    // return statement to end function execution and return to caller
    return password.join('');
  }
}
