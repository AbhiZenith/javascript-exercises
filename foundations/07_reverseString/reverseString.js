const reverseString = function(string) {
    let rev = ""
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    return rev;

};

// Do not edit below this line
module.exports = reverseString;
