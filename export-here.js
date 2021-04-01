export const add = (...nums) => nums.reduce((total, num) => (total += num, total), 0);

export const subtract = (...nums) => nums.reduce((total, num) => (total -= num, total), 0);

export const defaultFunc = () => console.log(`I'm the default function...`);

// export { default as defaultFunc, default };

// export { default as add };

// export { default as subtract };
