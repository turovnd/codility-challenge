// [1, 5, 2, 1, 4, 0]
// [10]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let lower = [];
  let upper = [];
  for (let i = 0; i < A.length; i++) {
    lower.push(i - A[i]);
    upper.push(i + A[i]);
  }
  lower.sort((a,b) => a - b);
  upper.sort((a,b) => a - b);

  let intersections = 0;
  let j = 0;
  for (let i = 0; i < A.length; i++) {
    while(j < A.length && upper[i] >= lower[j]) {
      intersections = intersections + j;
      intersections = intersections - i;
      j++;
    }
    if (intersections > 10000000) {
      return -1;
    }
  }
  return intersections
}