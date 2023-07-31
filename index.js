function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Remove non-letter characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z]/gi, "").toLowerCase();

  // Compare the original string with its reversed version
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  FUNCTION isPalindrome = string
  cleanedStr = RemoveNonLettersAndLowercase
  reversedStr = ReverseStrin

  IF cleanedStr is equal to reversedStr
    RETURN true
  ELSE
    RETURN false
  END IF
END FUNCTION

FUNCTION RemoveNonLettersAndLowercase(str)
  cleanedStr = empty string
  FOR each character in str
    IF character is a letter
      cleanedStr += lowercase version of the character
    END IF
  END FOR
  RETURN cleanedStr
END FUNCTION

FUNCTION ReverseString(str)
  reversedStr = empty string
  FOR i from length of str - 1 to 0
    reversedStr += str[i]
  END FOR
  RETURN reversedStr
END FUNCTION

*/
  
/*
  Add written explanation of your solution here
  
  The first code removes any characters and coverts everything to toLowerCase. 
  The next code will compare the original string with the converted version.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
