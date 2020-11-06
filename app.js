// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    // or more "elegantly" using the fantastic ternary expression!
// return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfThree = function(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
        return num1
    } else if (num2 > num1 && num2 > num3){
      return num2
    } else (num3 > num1 && num3 > num2)
      return num3
}

console.log(maxOfThree(15, 6, 88))

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char){
  char = char.toLowerCase(); //with strings, converting to lower or upper is needed
  return ('aeiouy'.indexOf(char) > -1) // checking string 'aeiouy' for character passed into char argument 
}

console.log(isCharAVowel('P'))

// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.


let sumArray = function(nums) {
  let sum = 0; //start at 0
  nums.forEach(function(total) {
    sum += total;
  });
  return sum;
}

console.log(sumArray([1, 2, 3, 8]));

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.



// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.



// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

//tip decriminting forLoop is ONE option, not the only opetion (check Tyler's post in Slack)

// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.



// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
