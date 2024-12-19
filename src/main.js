function run() {
    // Complete all problems below. Feel free to look up any information you'd like outside of the actual answers to
    // the questions. You can run the problems and see the output by executing this function.

    // OUTPUT PROVIDER NAMES

    console.log("\n\n-----findChains-----\n\n");
    console.log(findChains());

    // OUTPUT PARENS VALID TRUE/FALSE

    console.log("\n\n-----validParens-----\n\n");
    console.log(validParens());

    // OUTPUT ARRAY WITH MOVED ZEROES

    console.log("\n\n-----moveZeroes-----\n\n");
    console.log(moveZeroes());

    // OUTPUT TARGET INDEX OR -1

    console.log("\n\n-----findTarget-----\n\n");
    console.log(findTarget());
}

//  Instructions:
//  The NPI registry has an open API to find healthcare provider organizations.
//  https://npiregistry.cms.hhs.gov/registry/help-api
//
//  Given a zip code, get the first 10 providers for that zip code, and determine if any of those
//  providers are have multiple locations by searching the NPI registry with the organization
//  name. Return a comma delimited string of provider names that result in multiple locations.
//
//  Get up to 10 organizational providers by zip code:
//  https://npiregistry.cms.hhs.gov/api/?version=2.1&postal_code=97005&enumeration_type=NPI-2
//
//  Get up to 10 providers by organization name:
//  https://npiregistry.cms.hhs.gov/api/?version=2.1&enumeration_type=NPI-2&organization_name=THERAPEUTIC%20ASSOCIATES%20INC
async function findChains(zipCode = "97005") {

}

// Instructions:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 
// Example 1:
// Input: ()
// Output: true
//
// Example 2:
// Input: ()[]{}
// Output: true
// 
// Example 3:
// Input: ([)]
// Output: false
//
// Example 4:
// Input: {[]}
// Output: true
//
function validParens(s = '()') {

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
function moveZeroes(nums = [0, 1, 0, 3, 12]) {

}

// Instructions:
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
//
function findTarget(nums = [-1,0,3,5,9,12], target = 9) {
  
}

run()