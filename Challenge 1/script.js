/*
CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ^ 2. (mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

*/
function variable_compare()
{
  let mark_mass = 39;
  let mark_height = 170;
  let john_mass = 45;
  let john_height = 161;

  let mark_BMI = mark_mass / (mark_height * mark_height);
  let john_BMI = john_mass / (john_height * john_height);

  return mark_BMI > john_BMI;
}

console.log("Is Mark's BMI higher than John's?" variable_compare)
