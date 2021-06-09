//slice
var name='javascript';
var fLetter = name.slice(0,1);
var otherLetter = name.slice(1);
console.log(`${fLetter}${otherLetter}`);

//
alert(prompt("Enter Tweet: ").slice(0,240));
/**
x starting index(inclusive), y ending index(exclusive)
Index start at 0
What is the difference between slice and substring.
They are almost same, but there are few differences 
like substring swaps when star>stop. Slice returns empty strings
 */