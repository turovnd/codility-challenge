// {[()()]}
// ([)()]

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length === 0) {
    return 1;
  }
  let arr = S.split("");
  let brackets = [];
  for (let i = 0; i < arr.length; i++) {
    if (['{', '(', '['].indexOf(arr[i]) > -1) {
      brackets.push(arr[i])
    } else if (
      arr[i] === '}' && brackets[brackets.length - 1] !== '{' ||
      arr[i] === ')' && brackets[brackets.length - 1] !== '(' ||
      arr[i] === ']' && brackets[brackets.length - 1] !== '['
    ) {
      return 0;
    } else {
      brackets.pop();
    }
  }
  return brackets.length ? 0 : 1;
}