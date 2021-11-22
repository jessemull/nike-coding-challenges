module.exports.run = function() {

    // Complete all problems below. Feel free to look up any information you'd like outside of the actual answers to
    // the questions. You can run the problems and see the output by executing this function.


    // OUTPUT INTEGER ARRAY
  
    console.log("\n\n-----plusOne-----\n\n");
    console.log(plusOne());

    // OUTPUT ANAGRAM TRUE/FALSE

    console.log("\n\n-----isAnagram-----\n\n");
    console.log(isAnagram());


    // OUTPUT AVERAGE AGE

    console.log("\n\n-----averageAge-----\n\n");
    console.log(averageAge());
}

// Instructions:
// Given a large integer represented as an array of digits, where each digit is the i^th digit of the integer and the digits are ordered
// from the most significant to the least significant in left-to-right order, increment the large integer by one and return the resulting
// array of digits. The integer does not contain any leading 0's. The output should be an array of integers.
// 
// Example 1
// Input: [1, 2, 3]
// Output: [1, 2, 4]
//
// Example 2
// Input: [9]
// Output: [1, 0]
//
function plusOne(intputArray = [2, 4, 9]) {

  // Write your code here!

}

// Instructions:
// Given two strings return true if one is an anagram of the other. An anagram is a word formed by rearranging the letters of another word.
// 
// Example 1
// Input: anagram, nagaram
// Output: true
//
// Example 2
// Input: rat, car
// Output: false
//
function isAnagram(s = "debit card", t = "bad credit") {

  // Write your code here!

}

// Instructions:
// The website randomuser.me provides an API that produces randomly generated user information:
// https://randomuser.me/
//
// Get 10 random user profiles of US nationality:
// https://randomuser.me/api/?nat=us&results=10
// 
// The website api.agify.io provides an API that will predict someone's age based on their name:
// https://agify.io/
//
// Predict someone's age based on their name:
// https://api.agify.io?name=meelad
//
// Using the above APIs, fetch randomly generated data for a given number of users from the United States and return the predicted average age for their first names.
//
async function averageAge(numUsers = 10) {
  
  // Write your code here!

}
