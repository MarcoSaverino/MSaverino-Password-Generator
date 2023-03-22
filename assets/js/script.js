// Array for Symbols,Numbers and Letters to be included in password
var symbols = [
  '@', '%', '+', '\\', '/', "'", 
  '!', '#', '$', '^', '?', 
  ':', ',', ')', '(', '}', 
  '{', ']', '[', '~', '-', '_', '.'
];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowercase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

var uppercase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
];

// Assignment code 
function passwordoptions (){
  var length = parseInt (prompt("How Long Do You Want Your Password? Between 8-128 Characters"));
  if (Number.isNaN(length)) {
    alert ("Error: Must Be A Number");
    return null;
  }
  console.log("hello");
  if (length<8) {
    alert("Password Length Must Be At Least 8 Characters")
    return null;
  }
  if (length>128) {
    alert("Password Length Must Be No Greater Than 128 Characters")
    return null;
  }
  var hasUppercase = confirm("Would You Like Your Password To Include UpperCase?")
  var hasLowercase = confirm("Would You Like Your Password To Include LowerCase?")
  var hasNumbers = confirm("Would You Like Your Password To Include Numbers?")
  var hasSymbols = confirm("Would You Like Your Password To Include Symbols?")
  if (
    hasUppercase === false &&
    hasLowercase === false &&
    hasNumbers === false &&
    hasSymbols === false
  ){
    alert("Must Select At Least One Option!")
    return null;
  }
  var passwordchoices = {
    length: length,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasNumbers: hasNumbers,
    hasSymbols: hasSymbols
  };
  console.log("hello");
  return passwordchoices;
}

function getRandom(arr) {
  console.log("hello");
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
function generatePassword(){
  console.log("hello");
  var options = passwordoptions()
  var finalResult = []
  var possibleCharacters = []
  var guaranteedCharacters = []
  if (options.hasSymbols) {
    possibleCharacters = possibleCharacters.concat(symbols);
    guaranteedCharacters.push(getRandom(symbols));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }
  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    finalResult.push(possibleCharacter);
  }


  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalResult[i] = guaranteedCharacters[i];
  }


  return finalResult.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);