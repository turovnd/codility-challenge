// 30

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sumMin = Number.MAX_VALUE;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (2 * (i + N / i) < sumMin) {
        sumMin = 2 * (i + N / i);
      }
    }
  }
  return sumMin;
}