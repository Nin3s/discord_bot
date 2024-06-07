// for future reference
// https://github.com/component/rope
// https://www.freecodecamp.org/news/efficient-string-building-in-javascript/


function caesar(key, plaintext) {
    let res = []

    for (let i = 0; i < plaintext.length; i++){
        if (/[^A-Za-z]/g.test(plaintext[i])) {
            res.push(plaintext[i])
            continue;
        }
        else {
            let a = plaintext[i].charCodeAt(0)
            if (a >= 65 && a <= 90) {
                // A - Z
                a = (((a-65) + key) % 26) + 65
            }
            else if (a >= 97 && a <= 122) {
                // a - z
                a = (((a-97) + key) % 26) + 97
            }
            res.push(String.fromCharCode(a))
        }
    }
    res = res.join("")
    return res
}

module.exports = {caesar}