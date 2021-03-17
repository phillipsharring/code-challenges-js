const coffeeAmountsPurchased = [2, 3, 1, 5];
const pricePerCoffee = 125;
const expectedSumOfCoffees = 1375;

const sumOfCoffees = coffeeAmountsPurchased.reduce((acc, amount) => {
  return acc + amount * pricePerCoffee;
}, 0);

console.log(`The total bill is $${(sumOfCoffees / 100).toFixed(2)}.`);
