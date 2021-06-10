//3. Get the radius of the circle from user and print the area of the circle on the console
const radius=prompt('Enter the radius');
//Math.pow(radius,2) => raising radius to power of 2
//Math.pow(3,5) => 3 to the power of 5
const areaOfCircle=Math.PI*Math.pow(radius,2);//pi*r^2
console.log(areaOfCircle);//when radius = 5 anwer = 78.53981633974483
//Rounding my answer to the nearins whole number
console.log(Math.round(areaOfCircle));//when radius = 5 anwer = 79
