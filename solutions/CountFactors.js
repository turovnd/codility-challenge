// 24 => 8
// 16 => 5
// 1  => 1
// 2  => 2
// 6  => 4
// 42 => 10

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  let sqrtN = parseInt(Math.sqrt(N));
  for (let i = 1; i <= sqrtN; i++) {
    if (N % i === 0) {
      count += 2;
    }
  }
  if (sqrtN * sqrtN === N) {
    count--;
  }
  return count;
}
