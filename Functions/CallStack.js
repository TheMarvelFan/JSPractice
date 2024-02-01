// Three execution contexts:
// 1. Global: In browser, there is Window object, everywhere else there is empty object. Still counted as EC.
// 2. Function: Limited to a function
// 3. Eval: Property of global, not very clear, perhaps even deprecated now.

// Order of executing JS:
// 1. (Memory) Creation phase: Variables are allocated memory
// 2. Execution Phase: Calculations occur

let val1 = 5;
let val2 = 9;

function addNum(val1, val2) {
    let total = val1 + val2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(2, 7);

// Initially, all variables are collected and "undefined" is assigned to all of them
// when method is collected, its definition is assigned to it
// values are only assigned when in execution phase
// during execution phase, the function is assigned an execution context for itself, which has a variable environment, and an execution thread that deals with operation performed in this context
// for this new context created during function call, the Memory Phase and Execution Phase will start again
// these will take place as many times as the function is called
// after all processing is completed, this context is also deleted