const subtract = (...nums) => nums.reduce((total, num) => (total -= num, total), 0);

export default subtract;