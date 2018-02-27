module.exports = function check(str, bracketsConfig) {
    let stack = new Array();
    let len = str.length - 1;
    for (let i in str) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        }
        else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            if (stack.length === 0) {
                return false
            }
            let last = stack.pop()
            if ((last === '(' && str[i] !== ')') || (last === '{' && str[i] !== '}') || (last === '[' && str[i] !== ']')) {
                return false
            }
        }
        if (i == len) {
            if (stack.length === 0){return true}
            else {return false}
        }
    }
}