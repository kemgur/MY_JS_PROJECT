//concat()
var fName ='John';
var lName = 'Walter';
var age = 30;
var info = fName+' '+lName+' '+age;//"John Walter 30"
console.log(info);
var concat = fName.concat(lName);
console.log(concat);//"JohnWalter"

//trim(); remove spaces from the begining ande from the end
var words = '     Today is Wednesday             ';
console.log(words);
var trimmed = words.trim();
console.log(trimmed);//"Today is Wednesday"

//charAt(); Return the character in the index.
var charAtt = words.charAt(5);
console.log(charAtt);//"T"
