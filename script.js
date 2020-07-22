//variables
var generateBtn = document.querySelector("#generate");

//prompts + confims
var length = prompt("Please enter how long you want your password");
var upperCaseBoolean = confirm("Would you like uppercase letters in your password?");
var lowerCaseBoolean = confirm("Would you like lowercase letters in your password?");
var numberCaseBoolean = confirm("Would you like numbers in your password?");
var symbolCaseBoolean = confirm("Would you like special characters in your password?");

//assigning values
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_={}[],."
var  lower = "abcdefghijklmnopqrstuvwxyz"
var  upper =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var  numbers = "1234567890"
var  symbols = "!@#$%^&*()-_={}[],."

let password = "";


function generatePassword() {
  //setting password length
  if (length < 8) {
    alert("Please enter a value 8 or higher");
    prompt("Please enter how long you want your password");
  } else if (length > 128) {
    alert("please enter a value lower than 128");
    prompt("Please enter how long you want your password");
  }
  console.log(length); //this works


  if (upperCaseBoolean === true && lowerCaseBoolean === true && upperCaseBoolean === true && symbolCaseBoolean === true) {
    for(var i = 0; i = length; i++){
      //letting the empty password field be set with the length inputed by user and randomly filling it with the string
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

      console.log(password);
      return(password);
    }
  }

}



// Write password to the #password input
function writePassword() {
  //because this variable is calling a function, I need to create this function...
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
