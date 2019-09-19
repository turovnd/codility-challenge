// [4, 2, 2, 5, 1, 5, 8]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minInd = 0;
    let minVal = (A[0] + A[1]) / 2;
    let curAvg;
    for (let i = 0; i < A.length - 2; i++) {
        curAvg = (A[i] + A[i+1]) / 2;
        if (curAvg < minVal) {
            minVal = curAvg;
            minInd = i;
        }
        curAvg = (A[i] + A[i+1] + A[i + 2]) / 3;
        if (curAvg < minVal) {
            minVal = curAvg;
            minInd = i;
        }
    }
    curAvg = (A[A.length-2] + A[A.length-1]) / 2;
    if (curAvg < minVal) {
        minVal = curAvg;
        minInd = A.length-2;
    }
    return minInd;
}
