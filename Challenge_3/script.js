/*
CODING CHALLENGE 3

John and his family went to 3 different restaurants. The bills were $124, $48, and $268.

To Tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/

var bills = [124, 48, 268];
var totalTips = [];

function tipCalculator(bill) {
  let total_tips = [];
  for(let counter = 0; counter < bills.length; counter++) {
    let tips = 0;
    if(john_bills[counter] <= 50) {
      tips = bills[counter] * 0.2;
      john_bills[counter] = john_bills[counter] + tips;
    }
    else if(bills[counter] > 50 && bills[counter] <= 200) {
      tips = bills[counter] * 0.15;
      john_bills[counter] = john_bills[counter] + tips;
    }
    else {
      tips = bills[counter] * 0.10;
      john_bills[counter] = john_bills[counter] + tips;
    }

    total_tips.push(tips);
  }

  return total_tips;
}

var totalTips =  tipCalculator(bills);
console.log("John's total bills are", JSON.stringify(bills), "and John's three different tips are", JSON.stringify(bills));
