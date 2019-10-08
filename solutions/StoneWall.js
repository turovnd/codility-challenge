// [8, 8, 5, 7, 9, 8, 7, 4, 8]

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stack = [];
  let block = 0;
  let i = 0;
  while (i < H.length) {
    let h = H[i];
    if (stack.length === 0 || stack[stack.length - 1] < h) {
      stack.push(h);
      i++;
    } else if (stack[stack.length - 1] === h) {
      i++;
    } else { // stack[head] > h
      stack.pop();
      block++;
    }
  }
  return block + stack.length;
}