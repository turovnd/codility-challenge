// [-5, 5, -5, 4]
// [-3, 1, 2, -2, 5, 6]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) return 0;
  A.sort((a,b) => b - a);
  let max1 = A[0] * A[1] * A[2];
  let max2 = A[A.length - 1] * A[A.length - 2] * A[0];
  return max1 > max2 ? max1 : max2;
}