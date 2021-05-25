
//For Loop
for(let i =0; i<=5; i++){
console.log(i);//print 1-5
console.log(`For loop ${i}`);//print 1-5
}

for(let i =5; i>=0; i--){
    console.log(i);//print 5-0
    console.log(`For loop ${i}`);//print 5-0
}

//We use loops to iterate through the arrays
const todos=[
    {
        id: 1,
        task: 'take out the dog',
        isComplete:true
    },
    {
        id:2,
        task: 'meeting',
        isComplete: true
    },
    {
        id:3,
        task: 'doctor appt',
        isComplete:false
    }
]
console.log(todos);
console.log(todos[0]);//prints the first object inside the array
/**
 [object Object] {
  id: 1,
  isComplete: true,
  task: "take out the dog"
}
 */
console.log(todos[0].id);//1
console.log(todos[0].task);//"take out the dog"

//LOOP THROUGH ARRAY
for(let i=0;i<todos.length;i++){
    //console.log(todos[i]);
    //console.log(todos[i].id);
    //console.log(todos[i].isComplete);
    console.log(todos[i].task);
  }
