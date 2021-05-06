//Object
var color ="red";
var made = "toyota";
var year=2010;

console.log(color);
console.log(made);
console.log(year);

var car={
    color:"red",
    made:"toyota",
    year:2010
}
console.log(car);
console.log(typeof(car));//"object"
console.log("My car color is "+car.color);//"My car color is red"
console.log("my car made by "+ car.made);//"my car made by toyota"
console.log("My car year is "+ car.year);//"My car year is 2010"

//=====================
var person={
    name: "Murat",
    surname: "Yildiz",
    age:23,
    salary:1800,
    gender:"Man",
    married:true
}
console.log("Person name is "+person.name);//"Person name is Murat"
console.log("Person surname is "+ person.surname);//"Person surname is Yildiz"
console.log(typeof( "Person name is "+ person.surname));//"string"
console.log("Person age type of "+typeof(person.age));//"Person age type of number"
console.log(person.married);//true

//==========
//Update
person.name="kemal";
console.log(person);
person.surname="yildiz";
person.age=35;

person['name']="Halil";
person['surname'="Dogan"];
person['age']=40;
console.log(person);

person.job="IT Manager";//person da job ve city yoksa ekler
person.city="New York";//person da city varsa update eder.

//===============
var user={
    person1:{
        name:"Mustafa",
        surname:"Cetin",
        employed: true
    },
    person2:{
        name:"",
        salary:2400,
        year:2010
    },
    person3:{
        name:"Bush",
        department:"it",
        language: "English"
    },
    person4:{
        name:"Ali",
        salary:8000,
        language: ["English", "Turkish", "Spanish"]
    }
}
console.log(user);
console.log(user.person4);
console.log(user.person1);
console.log(user.person3.name);//"Bush"
console.log(user[1]);//undefined
console.log(user.person4.language);//"English, Turkish, Spanish"
console.log(user.person4.language[2]);//"Spanish"

//====================
//Array

let person=["Mustafa", "Doctor",1800, "Married", "New York"];
console.log(typeof(person));//"object"
