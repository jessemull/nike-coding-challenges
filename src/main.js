function run() {
    // Complete all problems below. Feel free to look up any information you'd like outside of the actual answers to
    // the questions. You can run the problems and see the output by executing this function.

    // OUTPUT INTERSECTION OF TWO ARRAYS

    console.log("\n\n-----intersectionOfTwoArrays-----\n\n");
    console.log(intersectionOfTwoArrays());

    // OUTPUT LONGEST COMMON PREFIX

    console.log("\n\n-----longestCommonPrefix-----\n\n");
    console.log(longestCommonPrefix());

    // OUTPUT PROVIDERS

    console.log("\n\n-----findChains-----\n\n");
    console.log(findChains());

    // OUTPUT TARGET INDEX OR -1

    console.log("\n\n-----findTarget-----\n\n");
    console.log(findTarget());
}

// Instructions:
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result 
// must appear as many times as it shows in both arrays and you may return the result in any order.
//
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
//
function intersectionOfTwoArrays(nums1 = [4,9,5], nums2 = [9,4,9,8,4]) {

}

// Instructions:
// Write a function to find the longest common prefix string amongst an array of strings. If there is no common 
// prefix, return an empty string "".
// 
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
//
function longestCommonPrefix(s = ["flower","flow","flight"]) {

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
//
function findChains(zipCode = "97005") {

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