import defaultFunc, { add, subtract } from './middleman.js';

console.log({add, subtract});

const addResult = add(1,2,3);

const subtractResult = subtract(1,2,3);

defaultFunc();

console.log({addResult, subtractResult});