module.exports.run = function() {

    // Complete all problems below. Feel free to look up any information you'd like outside of the actual answers to
    // the questions. You can run the problems and see the output by executing this function.


    // OUTPUT DUPLICATES
  
    console.log("\n\n-----findDuplicates-----\n\n");
    console.log(findDuplicates());

    // OUTPUT PALINDROME TRUE/FALSE

    console.log("\n\n-----isPalindrome-----\n\n");
    console.log(isPalindrome());


    // OUTPUT AVERAGE AGE

    console.log("\n\n-----averageAge-----\n\n");
    console.log(averageAge());
}

// Instructions:
// Given an array of integers, return an array of all numbers appearing more than once. Only output duplicates one time.
//
// Example 1
// Input: [1, 5, 3, 1, 5, 5]
// Ouput: [1, 5]
//
// Example 2
// Input: [7, 2, 1, 1, 7, 8]
// Output: [7, 1]
//
function findDuplicates(inputArray = [1, 5, 3, 2, 6, 8, 9, 10, 1, 5, 8, 9, 3, 10, 45, 32, 16, 14, 3, 5, 9]) {

  // Write your code here!

}

// Instructions:
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric 
// characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, 
// return true if it is a palindrome, or false otherwise.
// 
// Example 1
// Input: 'A man, a plan, a canal: Panama'
// Output: true
//
// Example 2
// Input: 'race a car'
// Output: false
//
function isPalindrome(s = 'A man, a plan, a canal: Panama') {

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
function averageAge(numUsers = 10) {
  
  // Write your code here!

}
