function run() {
    // Complete as many problems below as possible. Feel free to look up any information you'd like outside of the actual answers to
    // the questions. You can run the problems and see the output by executing this function.

    // OUTPUT TRUE/FALSE

    console.log("\n\n-----isAnagram-----\n\n");
    console.log(isAnagram());

    // OUTPUT ARRAY WITH ZEROES AT END

    console.log("\n\n-----moveZeroes-----\n\n");
    console.log(moveZeroes());

    // OUTPUT AVERAGE AGE

    console.log("\n\n-----averageAge-----\n\n");
    console.log(averageAge());

    // OUTPUT ROMAN NUMERAL AS INTEGER

    console.log("\n\n-----romanToInt-----\n\n");
    console.log(romanToInt());
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

}

// Instructions:
// Given an integer array of numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements in the array.
// Do this in place without making a copy of the array.
//
// Example 1:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
//
// Example 2:
// Input: [0]
// Output: [0]
//
function moveZeroes(nums) {
   
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

}

// Instructions:
// Given a roman numeral, convert it to an integer.
//
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I            1
// V            5
// X            10
// L            50
// C            100
// D            500
// M            1000
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same 
// principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
//
// Example 1:
// Input: III
// Output: 3
//
// Example 2:
// Input: IV
// Output: 4
//
// Example 3:
// Input: IX
// Output: 9
//
function romanToInt(s = 'IV') {
    
}

run()