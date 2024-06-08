// for future reference
// https://github.com/component/rope
// https://www.freecodecamp.org/news/efficient-string-building-in-javascript/


function caesarEncrypt(key, plaintext) {
    let res = []

    for (let i = 0; i < plaintext.length; i++){
        if (/[^A-Za-z]/g.test(plaintext[i])) { // anything not alphanumeric, skip
            res.push(plaintext[i])
            continue;
        }
        else {
            let a = plaintext[i].charCodeAt(0);
            if (a >= 65 && a <= 90) {
                // A - Z
                a = (((a-65) + key) % 26) + 65
            }
            else if (a >= 97 && a <= 122) {
                // a - z
                a = (((a-97) + key) % 26) + 97
            }
            res.push(String.fromCharCode(a));
        }
    }
    res = res.join("")
    return res
}
// can get negative remainder that needs to wrap back around
// add alphabet length back to remainder (26) and move it back to needed range with modulo
// example with key of 3:
//  97 - 97 - 3 = -3 % 26 = 23 + 26 = 49 % 26 = 23 + 97

// whereas 97 - 97 - 3 = -3 % 26 + 97 = 94
//  for some reason -3 % 26 shows up as -3 for javascript, apparently the sign of the dividend is the sign of the result
// https://stackoverflow.com/questions/4403542/how-does-java-do-modulus-calculations-with-negative-numbers
// https://stackoverflow.com/questions/45255387/modulus-operator-not-behaving-as-expected-in-javascript
function caesarDecrypt(key, ciphertext) {
    let res = []

    for (let i = 0; i < ciphertext.length; i++) {
        if (/[^A-Za-z]/g.test(ciphertext[i])) {
            res.push(ciphertext[i])
            continue;
        }
        else {
            let b = ciphertext[i].charCodeAt(0);
            if (b >= 65 && b <= 90) {
                b = (((b-65) - key) % 26 + 26) % 26 + 65
            }
            else if (b >= 97 && b <= 122) {
                b = (((b-97) - key) % 26 + 26) % 26 + 97
            }
            res.push(String.fromCharCode(b));
        }
    }
    res = res.join("")
    return res
}

module.exports = {caesarEncrypt, caesarDecrypt}