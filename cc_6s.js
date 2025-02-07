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

// Task 3- Arrow Function

calculateBonus = (salary, performanceRating) => salary * performanceRating;
salary = 5000;
performanceRating= "Excellent"// 20% bonus; 
performanceRating="Good"// 10% of salary; 
performanceRating= "Average"// 5% of salary
calculateBonus(50000, "Excellent");
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"
console.log(`Bonus: $${1000}`);  // Results in a Bonus of $1000
console.log(`Bonus: $${700}`);  // Results in a Bonus of $700

//Task 4- Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0)  {
     return plan * months * discount;
}

calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"
console.log(`Subscription Price 1: $${50}`);  // Results in $50
console.log(`Subscription Price 2: $${240}`);  // Results in $240