/*
CODING CHALLENGE 2

John and Mike both play basketball in difffernet teams. In the lastest 3 games, John's team scored 89, 120 and 013 points, while Mike's team scrored 116, 94, and 123 points.

1. Calculate the average score fo each team
2.Decide which teams wins in aerage (highest acerage score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate differnt winnners, keeping in mind there mignt be draws.

*/

var john  = (89 + 120 + 103)/3;
var mike = (116 + 94 + 123)/3;
var mary = (97 + 134 + 105)/3;

//john > mike ? console.log("John's team Wins!") : john == mike ? console.log("draw!") : console.log("Mike's team Wins!");
if(john > mike && john_team > mary)
  console.log("John's team Wins!");
else if(mike > john && john > mary)
  console.log("Mike's team Wins!");
else if(mary > john && mary > mike)
  console.log("Mary's team Wins!");
else if(john == mike && mike == mary)
  console.log("DRAW!");
