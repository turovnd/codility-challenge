// (()(())())
// ())

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = S.split("");
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      tmp.push('(');
    } else if (tmp.length) {
      tmp.pop();
    } else {
      return 0;
    }
  }
  return tmp.length ? 0 : 1;
}
