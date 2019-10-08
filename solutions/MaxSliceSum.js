// [3, 2, -6, 4, 0]
// [-2, 1]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum = A[0];
  if (A.length === 1) {
    return sum;
  }
  let tmpSum = A[0];
  for (let i = 1; i < A.length; i++) {
    if (tmpSum < 0) {
      tmpSum = 0;
    }
    tmpSum += A[i];
    if (tmpSum > sum) {
      sum = tmpSum;
    }
  }
  return sum;
}
