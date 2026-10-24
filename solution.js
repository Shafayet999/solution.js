/**
 * STN-7 Problem Solving Assessment
 * Language: JavaScript (Node.js compatible)
 * File: solution.js
 */

// ==========================================
// Problem 1: Staircase
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
  const lines = [];
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const hashes = '#'.repeat(i);
    lines.push(spaces + hashes);
  }
  return lines.join('\n');
};

// ==========================================
// Problem 2: Grading Students
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }
    const remainder = grade % 5;
    if (remainder >= 3) {
      return grade + (5 - remainder);
    }
    return grade;
  });
};

// ==========================================
// Problem 3: Time Conversion
// Time Complexity: O(1) | Space Complexity: O(1)
// ==========================================
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
  const modifier = s.slice(-2);
  let [hours, minutes, seconds] = s.slice(0, -2).split(':');

  if (modifier === 'AM') {
    if (hours === '12') {
      hours = '00';
    }
  } else {
    if (hours !== '12') {
      hours = String(Number(hours) + 12);
    }
  }

  return `${hours}:${minutes}:${seconds}`;
};

// ==========================================
// Problem 4: String Repeat
// Time Complexity: O(n * len(s)) | Space Complexity: O(n * len(s))
// ==========================================
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
  if (n <= 0) return '';
  return s.repeat(n);
};

// ==========================================
// Problem 5: Reversed Strings
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
  return str.split('').reverse().join('');
};

// ==========================================
// Problem 6: Sum of Positive
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

// ==========================================
// Problem 7: Grasshopper — Summation
// Time Complexity: O(1) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

// ==========================================
// Problem 8: Convert a Boolean to a String
// Time Complexity: O(1) | Space Complexity: O(1)
// ==========================================
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
  return b ? 'true' : 'false';
};

// ==========================================
// Problem 9: Fizz Buzz
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(i));
    }
  }
  return result;
};

// ==========================================
// Problem 10: Running Sum of 1D Array
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const result = new Array(nums.length);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result[i] = currentSum;
  }
  return result;
};

// ==========================================
// Problem 11: Richest Customer Wealth
// Time Complexity: O(m * n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customerTotal = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerTotal += accounts[i][j];
    }
    if (customerTotal > maxWealth) {
      maxWealth = customerTotal;
    }
  }
  return maxWealth;
};

// ==========================================
// Problem 12: Remove Duplicates from Sorted Array
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let writeIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }
  return writeIndex;
};

// ==========================================
// Problem 13: Contains Duplicate
// Time Complexity: O(n) | Space Complexity: O(n)
// ==========================================
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

// ==========================================
// Problem 14: Move Zeroes
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  while (nonZeroIndex < nums.length) {
    nums[nonZeroIndex] = 0;
    nonZeroIndex++;
  }
};

// ==========================================
// Problem 15: Merge Sorted Array
// Time Complexity: O(m + n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[tail] = nums1[p1];
      p1--;
    } else {
      nums1[tail] = nums2[p2];
      p2--;
    }
    tail--;
  }
};

// ==========================================
// Problem 16: 3Sum
// Time Complexity: O(n^2) | Space Complexity: O(1) excluding output
// ==========================================
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// ==========================================
// Problem 17: Plus One
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// ==========================================
// Problem 18: Reverse String
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// ==========================================
// Problem 19: Length of Last Word
// Time Complexity: O(n) | Space Complexity: O(1)
// ==========================================
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  let index = s.length - 1;

  while (index >= 0 && s[index] === ' ') {
    index--;
  }

  while (index >= 0 && s[index] !== ' ') {
    length++;
    index--;
  }

  return length;
};

// ==========================================
// Problem 20: Longest Common Prefix
// Time Complexity: O(S) where S is sum of all characters | Space Complexity: O(1)
// ==========================================
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
};

// ==========================================
// Verification Tests
// ==========================================
function runTests() {
  console.log('--- Problem 1: Staircase ---');
  console.log(staircase(4));

  console.log('\n--- Problem 2: Grading Students ---');
  console.log(gradingStudents([73, 67, 38, 33])); // [75, 67, 40, 33]

  console.log('\n--- Problem 3: Time Conversion ---');
  console.log(timeConversion('07:05:45PM')); // "19:05:45"
  console.log(timeConversion('12:00:00AM')); // "00:00:00"

  console.log('\n--- Problem 4: String Repeat ---');
  console.log(repeatStr(3, 'ha')); // "hahaha"

  console.log('\n--- Problem 5: Reversed Strings ---');
  console.log(solution('world')); // "dlrow"

  console.log('\n--- Problem 6: Sum of Positive ---');
  console.log(positiveSum([1, -4, 7, 12])); // 20

  console.log('\n--- Problem 7: Grasshopper Summation ---');
  console.log(summation(8)); // 36

  console.log('\n--- Problem 8: Convert Boolean to String ---');
  console.log(booleanToString(true)); // "true"

  console.log('\n--- Problem 9: Fizz Buzz ---');
  console.log(fizzBuzz(5)); // ["1", "2", "Fizz", "4", "Buzz"]

  console.log('\n--- Problem 10: Running Sum of 1D Array ---');
  console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]

  console.log('\n--- Problem 11: Richest Customer Wealth ---');
  console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])); // 6

  console.log('\n--- Problem 12: Remove Duplicates from Sorted Array ---');
  const arr12 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(arr12);
  console.log('Count:', k, 'Array slice:', arr12.slice(0, k)); // 5, [0, 1, 2, 3, 4]

  console.log('\n--- Problem 13: Contains Duplicate ---');
  console.log(containsDuplicate([1, 2, 3, 1])); // true

  console.log('\n--- Problem 14: Move Zeroes ---');
  const arr14 = [0, 1, 0, 3, 12];
  moveZeroes(arr14);
  console.log(arr14); // [1, 3, 12, 0, 0]

  console.log('\n--- Problem 15: Merge Sorted Array ---');
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  console.log(nums1); // [1, 2, 2, 3, 5, 6]

  console.log('\n--- Problem 16: 3Sum ---');
  console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]

  console.log('\n--- Problem 17: Plus One ---');
  console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]

  console.log('\n--- Problem 18: Reverse String ---');
  const chars18 = ['h', 'e', 'l', 'l', 'o'];
  reverseString(chars18);
  console.log(chars18); // ["o", "l", "l", "e", "h"]

  console.log('\n--- Problem 19: Length of Last Word ---');
  console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4

  console.log('\n--- Problem 20: Longest Common Prefix ---');
  console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
}

runTests();