// [23171, 21011, 21123, 21366, 21013, 21367]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0 || A.length === 1) {
    return 0;
  }
  let minPrice = A[0];
  let maxDiff = 0;
  let max = 0;
  for(let i = 1; i < A.length; i++) {
    maxDiff = Math.max(0, A[i] - minPrice);
    minPrice = Math.min(A[i], minPrice);
    max = Math.max(maxDiff, max);
  }
  return max;
}
