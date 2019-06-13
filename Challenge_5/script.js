/*
CODING CHALLENGE 5

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. This bills were $124, $48, $268, $180, and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create
1) a new array containing all tips
2) an array containing final paid amount (bill + tip). Hint: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 diffferent restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it.
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john = {
  bills : [124, 48, 268, 180, 42],
  tips : [],
  billsFinal : [],
  calculationz : function() {
    for(let i = 0; i < this.bills.length; i++) {
      this.bills[i] <= 50 ? this.tips[i] = (this.bills[i] * 0.2) : this.bills[i] > 50 && this.bills[i] <= 200 ? this.tips[i] = (this.bills[i] * 0.15) : this.tips[i] = (this.bills[i] * 0.10);
      this.billsFinal[i] = this.bills[i] + this.tips[i];
    }
  }
};

var mark = {
  bills : [77, 375, 110, 45],
  tips : [],
  billsFinal : [],
  calculationz : function() {
    for(let i = 0; i < this.bills.length; i++) {
      this.bills[i] <= 100 ? this.tips[i] = (this.bills[i] * 0.2) : this.bills[i] > 100 && this.bills[i] <= 300 ? this.tips[i] = (this.bills[i] * 0.10) : this.tips[i] = (this.bills[i] * 0.25);
      this.billsFinal[i] = this.bills[i] + this.tips[i];
    }
  }
};

function averageTip (tips) {
  let temp = 0;
  for(let i = 0; i < tips.length; i++) {
    temp += tips[i];
  }
  return temp / tips.length;
}

john.calculationz();
mark.calculationz();

var johnAverageTips = averageTip(john.tips);
var markAverageTips = averageTip(mark.tips);

johnAverageTips == markAverageTips ? console.log("Both family tipped the same amount!") :
johnAverageTips > markAverageTips ? console.log("John's family tipped more!") :
console.log("Mark's family tipped more!");
