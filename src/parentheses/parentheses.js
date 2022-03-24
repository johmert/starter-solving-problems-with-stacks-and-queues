const Stack = require("../lib/stack");

const match = (expression) => {
    const stack = new Stack();
    for(let i=0, length = expression.length; i<length; i++){
        if(expression[i] === '('){
            stack.push(expression[i]);
        }
        if(expression[i] === ')'){
            if(stack.top){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if(!stack.top){
        return true
    } else {
        return false;
    }
};

module.exports = match;
