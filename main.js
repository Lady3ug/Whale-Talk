// Store the phrase we will analyze
let input = "turpentine and turtles";

// Define the vowels we want to extract from the input string
const vowels = ["a", "e", "i", "o", "u"];

// Create an empty array that will hold the vowels we find
let resultArray = [];

// Loop through each character in the input string
for (let i = 0; i < input.length; i++) {
  
  // Check if the current character is 'e'
  // If true, add an extra 'e' to the resultArray
  if (input[i] === "e") {
    resultArray.push("e");
  } 
  // Check if the current character is 'u'
  // If true, add an extra 'u' to the resultArray
  else if (input[i] === "u") {
    resultArray.push("u");
  }

  // Inner loop: compare the current input character with each vowel
  for (let j = 0; j < vowels.length; j++) {
    // If the character matches one of the vowels
    if (input[i] === vowels[j]) {
      // Add that vowel to the resultArray
      resultArray.push(vowels[j]);
    }
  }

  // Join the resultArray into a single string
  // Convert it to uppercase for emphasis
  let resultString = resultArray.join("").toUpperCase();

  // Print the result so far at the end of each outer loop iteration
  console.log(resultString);
}
