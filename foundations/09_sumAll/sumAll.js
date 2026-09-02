const sumAll = function (int1, int2) {
    if (int1 > 0 && int2 > 0 && Number.isInteger(int1) && Number.isInteger(int2)) {
        const n = Math.max(int1, int2);
        let total = 0;

        for (let i = Math.min(int1, int2); i <= n; i++) {
            total += i;
        }
        return total;
    } else {
        return "ERROR";
    }
}


// Do not edit below this line
module.exports = sumAll;
