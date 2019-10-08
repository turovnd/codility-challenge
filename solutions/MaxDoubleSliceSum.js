// [3, 2, 6, -1, 4, 5, -1, 2]
// [-2, 1, 1]
// [5, 17, 0, 3]
// [6, 1, 5, 6, 4, 2, 9, 4]


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxK1 = [];
  let maxK2 = [];
  maxK1[0] = maxK2[0] = 0;
  maxK1[A.length - 1] = maxK2[A.length - 1] = 0;
  for (let i = 1; i < A.length; i++) {
    if (i < A.length - 1) {
      maxK1[i] = Math.max(maxK1[i - 1] + A[i], 0);
    }
    let j = A.length - i;
    if (j < A.length - 1) {
      maxK2[j] = Math.max(maxK2[j + 1] + A[j], 0);
    }
  }
  let max = 0;
  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(max, maxK1[i-1] + maxK2[i+1]);
  }
  return max;
}