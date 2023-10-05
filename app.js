// Functions

// Question no 1

// function getCurrentDateAndTimeInWords() {
//     var now = new Date();
  
//     var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
//     const dayOfWeek = daysOfWeek[now.getDay()];
//     const dayOfMonth = now.getDate();
//     const month = months[now.getMonth()];
//     const year = now.getFullYear();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
  
//     var timeInWords = (dayOfWeek)+(" ")+(dayOfMonth)+(" ")+(month)+(" ")+(year)+(" ")+(hours)+(":") +("")+ (minutes);
    
//     return timeInWords;
//   }
  
//   function getCurrentYear() {
//     var now = new Date();
//     var year = now.getFullYear();
//   }
  
//   // Usage
//   const currentDateTimeInWords = getCurrentDateAndTimeInWords();
//   const currentYear = getCurrentYear();
  
//   console.log(currentDateTimeInWords);


// Question no 2

// function greetUser(firstName , lastName) {
//     const fullName = (firstName) + (" ")+ (lastName);
//     document.write( "Hello ," + (" ") + (fullName) + (" ") +  "! Welcome.");
//   }
  
//   const firstName =prompt(" Enter Your First Name ");
//   const lastName = prompt(" Enter Your Last Name ");
//   greetUser(firstName, lastName);
  


//  Question No 3
// function addNumbers() {
//     var number1 = Number(prompt("Enter the first number:"));
//     var number2 = Number(prompt("Enter the second number:"));
  
//     if (isNaN(number1) || isNaN(number2))
//      {
//       return "Invalid input. Please enter valid numbers.";
//     }
  
//     var sum = number1 + number2;
//     return " The sum of " + (number1) + " and " + (number2) + " is " + (sum);
//   }
  
//   const result = addNumbers();
//   console.log(result);
  



// Quetion No 4

// function calculate(num1, num2, operator) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "Division by zero is not allowed.";
//         }
//       default:
//         return "Invalid operator. Please use '+', '-', '*', or '/'.";
//     }
//   }
  
//   var num1 = Number(prompt("Enter the first number:"));
//   var num2 = Number(prompt("Enter the second number:"));
//   var operator = prompt("Enter the operator (+ , - , * , /):");
  
//   var result = calculate(num1, num2, operator);
  
//   if (typeof result === 'number') {
//     console.log(" Result : " + (result));
//   } else {
//     console.error(result);
//   }
  

// Question No 5

// function squareNumber(number) {
//     return number * number;
//   }
  
//   var inputNumber = prompt("Enter a Number to square");
//   var squaredResult = squareNumber(inputNumber);
//   console.log(" The square of " + (inputNumber)  + " is " + (squaredResult));
  

// Question no 6




// QUESTION NO 7   

// function displayCounting(start, end) {
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         console.log(i);
//       }
//     } else {
//       console.log("Starting number must be less than or equal to the ending number.");
//     }
//   }
  
//   var startNumber = Number (prompt("Enter the First Number of Counting"));
//   var endNumber = Number(prompt("Enter the Last Number of Counting"));
  
//   displayCounting(startNumber, endNumber);


// Question no 8






// Question no 09


// A Arguments as Value

// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
//   var area1 = calculateRectangleArea( 2,5 ); 
//   console.log(" Area 1: "+ (area1));
  

// B Arguments as Variables

// function calculateRectangleAreaWithVariables() {
//     var width = prompt("Enter the value of Width"); 
//     var height = prompt("Enter the value of Height"); 
//     var area = (width * height);
//     return area;
//   }
  
//   var area2 = calculateRectangleAreaWithVariables();
//   console.log(" Area 2: " + (area2));
  


// Question no 10


// function isPalindrome(inputString) {
//     var cleanedString = inputString.replace(/\s/g, '').toLowerCase();
 
//     var reversedString = cleanedString.split('').reverse().join('');
 
//    return cleanedString === reversedString;
//  }
 
//  var testString1 = prompt("1st value");
//  var testString2 = prompt("2nd value");
//  console.log(" Is " + (testString1) + " a palindrome? " + (isPalindrome(testString1)));
//  console.log(" Is " + (testString2) + " a palindrome? " + (isPalindrome(testString2)));
 


// Question no11

// function capitalizeFirstLetter(inputString) {
//      var words = inputString.split(' ');
  
//     var capitalizedWords = words.map(word => {
//        if (word.length > 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       } else {
//         return "Please Enter a Word to Capitalized "; 
//       }
//     });
  
//      var capitalizedString = capitalizedWords.join(' ');
  
//     return capitalizedString;
//   }
//   var inputString = prompt("Enter a word");
//   var result = capitalizeFirstLetter(inputString);
//   console.log(result); 
  


// Question No 12


// function findingLongestWord(inputString) {
//     var words = inputString.split(' ');
  
//     let longestWord = '';
//     let longestWordLength = 0;
  
//      for (var word of words) {
//       var wordLength = word.length;
//       if (wordLength > longestWordLength) {
//         longestWord = word;
//         longestWordLength = wordLength;
//       }
//     }
  
//     return longestWord;
//   }
  
//   // Example usage:
//   var inputString = prompt(" Write a sentense" );
//   var longest = findingLongestWord(inputString);
//   console.log("The longest word is:" + (longest));
  


// Question No 13


// function countingOccurrences(string, letter) {
//     let value = 0;
//     var lowerString = string.toLowerCase();
//     var lowerLetter = letter.toLowerCase();
  
//      for (let i = 0; i < lowerString.length; i++) {
//         if (lowerString.charAt(i) === lowerLetter) {
//         value++;
//       }
//     }
  
//     return value;
//   }
  
//   var inputString = prompt("Write a Sentence");
//   var specifiedLetter = prompt("Enter a letter wants to specify in your sentence");
//   var occurrences = countingOccurrences(inputString, specifiedLetter);
//   console.log(" The letter "+ (specifiedLetter)+ " appears " + (occurrences) + " times in the string. ");
  

