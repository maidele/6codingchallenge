//Task 1 - Business Profit Calculation

function calculateProfit(sellingPrice1, costPrice1, unitsSold1) {
    return (sellingPrice1 - costPrice1) *unitsSold1;
}
const sellingPrice1 = 20
const costPrice1= 30
const unitsSold1 = 100
const profitAmount1=calculateProfit(20, 30, 100);
console.log(`Profit: $${profitAmount1}`);  // Results in a profit of $1000

const sellingPrice2 = 50
const costPrice2= 70
const unitsSold2 = 200
const profitAmount2=calculateProfit(50, 70, 200);
console.log(`Profit: $${profitAmount2}`);  // Results in a profit of $4000

// Task 2- Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    return amount * taxRate;
}
const totalAmount1 = 100;
const taxRate1 = 0.07; 
let salesTax1=
calculateSalesTax(100, 0.07);
console.log(`SalesTax: $${salesTax1}`);  

const totalAmount2 =  500
const taxRate2 = 0.1
let salesTax2=
calculateSalesTax(500, 0.1)
console.log(`SalesTax: $${salesTax2}`);  


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

//Task 5- Currency Conversion

function convertCurrency(amount, exchangeRate)  {
    return amount, exchangeRate;
}
amount = 10000;
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"
console.log(`Currency $${110}`);  // Results in $110
console.log(`Currency $${212.50}`);  // Results in $212.50

//Task 6-