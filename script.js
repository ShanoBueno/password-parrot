// Assignment code here




var writePassword = function (){
characterPool = "";
  
  // length logic
  var length = prompt("Choose a password length between 8 - 124 characters:");
  if (length < 8 || length > 128) {
    window.alert("Length must be between 8 and 128");
  // lets user re-enter length
    writePassword(); 
  };
// add uppercase logic
  var uppercase = window.confirm("Would you like your password to contain UPPERCASE characters? Click OK to add, and Cancel to skip.");
    if (uppercase){ 
      window.alert("UPPERCASE added")
  
      characterPool = characterPool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
    } else {
     window.alert("UPPERCASE omitted")
    }

 // add lower case logic 
  var lowercase = window.confirm("Would you like your password to contain lowercase characters? Click OK to add, and Cancel to skip.");
  if (lowercase) {
    characterPool = characterPool + "abcdefghijklmnopqrstuvwxyz";
    window.alert("Lowercase added")
    
  } else {
    window.alert("lowercase omitted")
  };


  console.log(characterPool);
  
  //add lower case logic
  var numbers = window.confirm("Would you like your password to contain numbers? Click OK to add and cancel to skip");
  if (numbers) {
    characterPool = characterPool + "1234567890";
    window.alert("Numbers added")
  } else {
    window.alert("Numbers omitted")
  }

   //add special character logic 
  var specialCharacters = window.confirm("Would you like to add special characters to your password? Click Ok to add and cancel to skip");
  if (specialCharacters) {
    characterPool = characterPool + "!@#$%^&*()_+"
    window.alert("Special characters added")
  } else {
    window.alert("Special characters omitted")
  }
  window.alert(characterPool)


  //resets if all characters omitted
  if (characterPool === ""){
    window.alert("Password must have characters.")
    writePassword(); 
  }

  
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);