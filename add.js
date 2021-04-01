const add = (...nums) => nums.reduce((total, num) => (total += num, total), 0);

export default add;