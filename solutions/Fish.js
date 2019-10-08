// [4, 3, 2, 1, 5], [0, 1, 0, 0, 0]

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numFishes = A.length;
  if (numFishes === 0) {
    return 0;
  }
  let downstreams = [];
  for (let i = 0; i < A.length; i++) {
    // Fish is going downstreams
    if (B[i] === 1) {
      downstreams.push(A[i])
    }
    // Fish is going upstreams
    else {
      while (downstreams.length) {
        // Downstream-fish is bigger
        if (downstreams[downstreams.length - 1] > A[i]) {
          // Upstream-fish gets eaten
          numFishes--;
          break;
        }
        // Downstream-fish is smaller
        else if (downstreams[downstreams.length - 1] < A[i]) {
          // Downstream-fish gets eaten
          numFishes--;
          downstreams.pop();
        }
      }
    }
  }
  return numFishes;
}