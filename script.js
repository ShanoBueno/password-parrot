// Assignment code here

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};


var makePassword = function (){

  //resets all values when the function begins
  
var characterPool = "";
var password = "";
var yesCount = 0; 
  
  // length logic
  var length = prompt("Choose a password length between 8 - 124 characters:");
  if (length < 8 || length > 128) {
    window.alert("Length must be between 8 and 128");
  // lets user re-enter length
    makePassword(); 
  };
// add uppercase logic
  var uppercase = window.confirm("Would you like your password to contain UPPERCASE characters? Click OK to add, and Cancel to skip.");
    if (uppercase){ 
      window.alert("UPPERCASE added")
  
      characterPool = characterPool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      yesCount = yesCount + 1; 
    } else {
     window.alert("UPPERCASE omitted")
    }

 // add lower case logic 
  var lowercase = window.confirm("Would you like your password to contain lowercase characters? Click OK to add, and Cancel to skip.");
  if (lowercase) {
    characterPool = characterPool + "abcdefghijklmnopqrstuvwxyz";
    window.alert("Lowercase added")
    yesCount = yesCount + 1; 
  } else {
    window.alert("lowercase omitted")
  };



  
  //add lower case logic
  var numbers = window.confirm("Would you like your password to contain numbers? Click OK to add and cancel to skip");
  if (numbers) {
    characterPool = characterPool + "1234567890";
    window.alert("Numbers added")
    yesCount = yesCount + 1; 
  } else {
    window.alert("Numbers omitted")
  }

   //add special character logic 
  var specialCharacters = window.confirm("Would you like to add special characters to your password? Click Ok to add and cancel to skip");
  if (specialCharacters) {
    characterPool = characterPool + "!@#$%^&*()_+"
    window.alert("Special characters added")
    yesCount = yesCount + 1; 
  } else {
    window.alert("Special characters omitted")
  }
 


  //resets if all characters omitted
  if (characterPool === ""){
    window.alert("Password must have characters.")
    makePassword(); 
  }
  //selects random character from characterPool

  var fullcharacterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  
  //builds first part of password with all criteria selected

  for (i = 0; i < length - yesCount; i++){
    password = password + characterPool[randomNumber(0,characterPool.length)]
   
  };
  //verifies last characters of password contain a random character from each criteria the user chooses.

  if (uppercase) {
      password = password + fullcharacterPool[randomNumber(0,25)]
  };

  if (lowercase) {
    password = password + fullcharacterPool[randomNumber(26,50)]
  };

  if (numbers) {
    password = password + fullcharacterPool[randomNumber(51,60)]
  }

  if (specialCharacters) {
    password = password + fullcharacterPool[randomNumber(61,fullcharacterPool.length)]
  }


  return password;

  
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
