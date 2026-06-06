const prices = [500, 700, 300];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);