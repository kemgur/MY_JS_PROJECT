//NORMAL FUNCTION IN JS
function car(brand, model, year){
    return {//We can return object in JS
      brand, model, year
    };
  }
  //calling the car function
  const carFunction = car('Honda', 'Accord', 2010);
  //
  console.log(carFunction);
  /*
  [object Object] {
    brand: "Honda",
    model: "Accord",
    year: 2010
  }
  */
  console.log(carFunction.brand);//"Honda"
  console.log(carFunction.model);//"Accord"
  console.log(carFunction.year);//2010

//CONSTRUCTORS IN JS
function Car(brand, model, year){
    //this keyword is a reference to the object in the code
    this.brand=brand;
    this.model=model;
    this.year=year;
  }
  //Calling the car constructor
  const carConstructor=new Car('Tesla','model 3', 2020);
  console.log(carConstructor);
  console.log(carConstructor.brand);//"Tesla"
  console.log(carConstructor.model);//"model 3"
  console.log(carConstructor.year);//2020

  const carConstructor1=new Car('BMW','E3000', 2021);
  console.log(carConstructor1);
  console.log(carConstructor1.brand);//"BMW"
  console.log(carConstructor1.model);//"E3000"
  console.log(carConstructor1.year);//2021
  
  /**
   person2
“Jim”
23
FALSE
[“English”,”German”]
9:47
Properties
Name
Age
hasWorkPermit
Languages
   */
function person(Name, Age, hasWorkPermit,Languages){
    return {//We can return object in JS
        Name, Age, hasWorkPermit,Languages
    };
  }
const personConstructor=new person('Jim',false, 2020,['English','German']);
console.log(personConstructor);