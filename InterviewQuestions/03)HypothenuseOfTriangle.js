//4. Get both sides of the triangle and print the hypothenuse of the triangle. 
//Round your answer to the nearist whole number.
const side1=prompt('Triangle side 1')
const side2=prompt('Triangle side 2')
//Math.pow(side1,2) SAME AS side1**2
const hypothenus=Math.round(Math.sqrt(side1**2+side2**2));
console.log(hypothenus);//side1=5,side2=6, hypothenus=8
