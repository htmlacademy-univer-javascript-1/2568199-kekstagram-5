function stringLengthCheck(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  let normalizedStr = str.replaceAll(' ', '').toLowerCase();

  let reversedStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
      reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}
