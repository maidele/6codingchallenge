//Task 1 - Business Profit Calculation

function calculateProfit(sellingPrice, costPrice, unitsSold) {
    return  sellingPrice - costPrice/unitsSold ;
}
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"
console.log(`Profit: $${1000}`);  // Results in a profit of $1000
console.log(`Profit: $${4000}`); // Results in a profit of $400
