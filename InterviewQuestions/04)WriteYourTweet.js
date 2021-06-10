//5.Create a prompt : “Write your tweet” -> use prompt. 
// Type random text and calculate the number of sent character and the remaining character.
// Note  Max character for a tweet is 280.
var tweet = prompt('Enter your tweet');
var slicedTweet= tweet.slice(0,280);
var numOfUsedCharacter=slicedTweet.length;
var remainingCharacter=280-numOfUsedCharacter;

console.log(`Used character :  ${numOfUsedCharacter}. Remaining character : ${remainingCharacter}`);
