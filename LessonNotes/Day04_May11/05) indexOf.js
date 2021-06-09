/**
 The indexOf method will starts index of 0.
It always return -1 if there was no match.
IndexOf always returns a number.
 */
const string ='New York';
const indexW= string.indexOf('w');
console.log(indexW);//2

const location = 'Main Street , London, England';
const index = location.indexOf('London');
console.log(index);//15

if(index!==-1){
    console.log(`Yes, "London" exists in ${location}`);
};//"Yes, \"London\" exists in Main Street , London, England"

