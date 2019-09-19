//  ('CAGCCTA', [2, 5, 0], [4, 5, 6])

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = [];
    for (let i = 0; i < P.length; i++) {
        let str = S.substring(P[i], Q[i] + 1);
        if (str.indexOf('A') > -1) {
            arr.push(1);
        } else if (str.indexOf('C') > -1) {
            arr.push(2);
        } else if (str.indexOf('G') > -1) {
            arr.push(3);
        } else if (str.indexOf('T') > -1) {
            arr.push(4);
        }
    }
    return arr;
}