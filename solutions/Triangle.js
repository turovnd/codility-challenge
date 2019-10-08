// [10, 2, 5, 1, 8, 20]
// [10, 50, 5, 1]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) return 0;
  A.sort((a,b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (
      A[i] + A[i+1] > A[i+2] &&
      A[i+1] + A[i+2] > A[i] &&
      A[i+2] + A[i] > A[i+1]
    ) {
      return 1;
    }
  }
  return 0;
}
