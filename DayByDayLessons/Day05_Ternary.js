
/* 
(expression) ? x(if expression is true print this) : y(if expression is false print this)
*/
const x=5; y=6;
x>y ? console.log('x is greater than 5'): console.log('x is not greater than 5'); 
const isExpensive = x>4 ? 'Expensive' : 'Cheap';
console.log(isExpensive);
const isExpensive1 = x>4 ? (y<4 ? 'y is less than 4' : 'y is not less than 4') : 'Cheap';
console.log(isExpensive1);