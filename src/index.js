module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let config = bracketsConfig;
    for (let i of str){
        for (let y of config){
            if (i === y[0] && y[0] !== y[1] ) {
                stack.push(i);
            } else if (i === y[0] && y[0] === y[1]){
                if (stack[stack.length-1] === i){
                    stack.pop();
                } else {stack.push(i);}
            } else if (stack[stack.length-1] === y[0] && i === y[1]){
                stack.pop();
            } else if (i === y[1] && stack[stack.length-1] !== y[0]){
                return false;
            }
        }
    }
    if (stack.length === 0) return true;
    else return false;
}