// [4, 3, 4, 4, 4, 2]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) {
    return 0;
  }
  let obj = {};
  let leader = {
    count: -1,
    value: null
  };
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = !obj[A[i]] ? 1 : obj[A[i]] + 1;
    if (obj[A[i]] > leader.count) {
      leader.count = obj[A[i]];
      leader.value = A[i];
    }
  }
  if (leader.count < A.length / 2) {
    return 0
  }
  let equiLeaderCount = 0;
  let leaderCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader.value) {
      leaderCount++;
    }

    if (leaderCount > (i + 1) / 2 && (leader.count - leaderCount) > (A.length - i - 1 ) / 2) {
      equiLeaderCount++;
    }
  }
  return equiLeaderCount;
}
