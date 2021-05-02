
// Get 2 names from user and store variables:name1, name2. 
// Create a variable loveScore and store the random number. 
// loveScore should be a random whole number between 1-100(inclusive) percent. 
// Calculate the chance of a successful relationship. The closer to 100% the stronger
// Task 1: Print ‘name1 and name2 ’s love score is loveScore’
// Task 2: Print ‘You love each other’ if loveScore is greater or equal to 80 %. 
// Print ‘Not a strong relationship’ otherwise
// Task 3: Print ‘You love each other’ if loveScore is greater or equal to 80 %.
// Print ‘Modorate relationship’  if loveScore is between is in between 50% and 80%
// Print ‘Not a strong relationship’ otherwise
// https://www.lovecalculator.com/
console.clear();
var name1=prompt('Enter Your Name')
var name2=prompt("Enter Your Crush's name");
var loveScore=Math.random()*100;
console.log(loveScore);
loveScore=Math.floor(loveScore)+1;//1 and 100
console.log(loveScore);
// Task 1: Print ‘name1 and name2 ’s love score is loveScore’
console.log(`${name1} and ${name2}'s love score is ${loveScore} %`)
// Task 2: Print ‘You love each other’ if loveScore is greater or equal to 80 %. 
// Print ‘Not a strong relationship’ otherwise
// Task 3: Print ‘You love each other’ if loveScore is greater or equal to 80 %.
// Print ‘Modorate relationship’  if loveScore is in between 50% and 80%
// Print ‘Not a strong relationship’ otherwise
