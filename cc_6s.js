//Task 1 - Business Profit Calculation

function calculateNetProfit(sellingPrice, costPrice, unitsSold) {
    return sellingPrice - costPrice*unitsSold;
}
const sellingPrice = 20; 50
const costPrice = 30; 70
const unitsSold = 40; 200
calculateNetProfit(20, 30, 100);
calculateNetProfit(50, 70, 200);
console.log(`Profit: $${1000}`);  // Results in a profit of $1000
console.log(`Profit: $${4000}`);  // Results in a profit of $4000

// Task 2- Sales Tax Computation

function calculateSalesTax(Amount, taxRate) {
    return Amount * taxRate;
}
totalAmount = 100; 500
const taxRate = 0.07; 0.1 
const tax = calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1)
console.log(`SalesTax: $${7}`);  
console.log(`SalesTax: $${50}`);


