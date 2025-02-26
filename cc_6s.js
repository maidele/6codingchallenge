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
console.log(`SalesTax: $${salesTax1}`); // Expected output: "Sales Tax: $7"

const totalAmount2 =  500
const taxRate2 = 0.1
let salesTax2=
calculateSalesTax(500, 0.1)
console.log(`SalesTax: $${salesTax2}`); // Expected output: "Sales Tax: $50"


// Task 3- Arrow Function

    const calculateBonus = (salary, performanceRating) => {

    if (performanceRating === "Excellent") return salary * 0.2;
    
    if (performanceRating === "Good") return salary * 0.1;
    
    if (performanceRating === "Average") return salary * 0.05;
    
    };

const salary1 = 5000
const performanceRating1 = "Excellent"
const calculateBonus1= calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"  
console.log(`Bonus: $${calculateBonus1}`);  // Results in a Bonus of $1000

const salary2 = 7000
const performanceRating2 = "Good"
const calculateBonus2= calculateBonus(7000, "Good"); // Expected output: "Bonus: $700"
console.log(`Bonus: $${calculateBonus2}`);  // Results in a Bonus of $1000


//Task 4- Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0) {

    const planRates = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    
    return (planRates[plan] * months) - discount;
    
    }
let subscriptionCost1= calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
console.log(`Subscription Price 1: $${subscriptionCost1}`);  // Results in $50

let subscriptionCost2= calculateSubscriptionCost ("Premium", 12, 0); // Expected output: "Total Cost: $240"
console.log(`Subscription Price 2: $${subscriptionCost2}`);  // Results in $240

//Task 5- Returning Values
function convertCurrency(amount, exchangeRate) {

    return (amount * exchangeRate).toFixed(2); 
}
const amount1 = 100
const exchangeRate1 = 1.1;
const Currency1 = convertCurrency(amount1, exchangeRate1)
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
console.log(`Currency1: $${Currency1}`); 

const amount2 = 250
const exchangeRate2 = 0.85;
const Currency2 = convertCurrency(amount2, exchangeRate2)
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"
console.log(`Currency2: $${Currency2}`)

//Task 6

function applyBulkDiscount(orders, discountRate) {
  return orders.map(order => discountRate(order));
    }
const orders = [200, 600, 1200, 450, 800];
const discountRate = 0.9;
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discountedOrders);  // Expected output: [200, 540, 1080, 450, 720]

//Task 7

 
      

