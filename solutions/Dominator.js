//  [3, 4, 3, 2, 3, -1, 3, 3]
//  [2, 1, 1, 3]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};
  let dominatorCount = -1;
  let dominatorIndex = -1;
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = !obj[A[i]] ? 1 : obj[A[i]] + 1;
    if (obj[A[i]] > dominatorCount) {
      dominatorCount = obj[A[i]];
      dominatorIndex = i;
    } else if (obj[A[i]] === dominatorCount) {
      dominatorIndex = -1;
    }
  }
  return A.length / 2 < dominatorCount ? dominatorIndex : -1;
}
