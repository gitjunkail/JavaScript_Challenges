/*
CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with propertites for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Note: BMI = mass / height^2
*/

var mark = {
  firstname: 'Mark',
  mass: 110,
  height: 1.95,
  BMI : function(){
    return this.mass / (this.height * this.height);
  }
};

var john = {
  firstname: 'John',
  mass: 78,
  height: 1.69,
  BMI : function(){
    return this.mass / (this.height * this.height);
  }
};

function variable_compare()
{

  return mark.BMI() > john.BMI();
}

console.log("Is Mark's BMI higher than John's?", variable_compare());
