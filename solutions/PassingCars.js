// A = [0, 1, 0, 1, 1]
// A = [0, 0, 0, 0, 1]
// A = [0]
// A = [0, 0]
// A = [1]
// A = [1, 0]
// A = [0, 1]
// A = [1, 1]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let indE = [];
    let indW = [];
    let sum = 0;
    let minE = -1;
    for (let ind = 0; ind < A.length; ind++) {
        if (A[ind] === 0 && minE === -1) {
            minE = ind;
        }
        if (minE > -1) {
            if (A[ind] === 1) {
                indW.push(ind);
                sum += indE.length;
                if (sum > 1000000000) {
                    return -1
                }
            } else {
                indE.push(ind);
            }
        }
    }
    return sum
}
