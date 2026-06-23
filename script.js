let totalBuys = 999;
let discount;
let totalPayable;

if (totalBuys >= 1000) {
    console.log("Congratulations! 10% discount for you");

    discount = totalBuys * 0.1; // Calculate the discount amount
    totalPayable = totalBuys - discount; // Calculate payable amount

    console.log("Discount Amount:", discount);
    console.log("Total Payable:", totalPayable);

} else if (totalBuys >= 500) {
    console.log("Congratulations! 5% discount for you");

    discount = totalBuys * 0.05;
    totalPayable = totalBuys - discount;

    console.log("Discount Amount:", discount);
    console.log("Total Payable:", totalPayable);

} else {
    console.log("Sorry! No discount for you");
}