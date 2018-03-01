module.exports = function check(str, bracketsConfig) {
    let len = str.length - 1;
    let stack = [];
    for (let i in str){
        for (let y in bracketsConfig){

            if (str[i] === '|' && bracketsConfig[y][0] === '|'){

                if (stack.indexOf('|') != -1){
                    let top = stack.pop();
                    if (top !== '|'){
                    return false}
                }
                else {
                    stack.push(str[i]);
                }
            }
            
            else if (str[i] === bracketsConfig[y][0]){
                stack.push(str[i]);
            }
            else if (str[i] === bracketsConfig[y][1] ){
                if (stack.length === 0) {
                    return false;}

                let top = stack.pop();
                if (top !== bracketsConfig[y][0]){
                    return false}
            }
        }

        if (i == len) {
            if (stack.length === 0){return true}
            else {return false}
        }
    }
}