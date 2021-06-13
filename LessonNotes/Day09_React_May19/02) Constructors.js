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
  
  //DEFINING CONSTRUCTORS IN JS
  function Car(brand, model, year){
    //this keyword is a reference to the object in the code
    //"this" keyword, koddaki nesneye bir referanstır
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
  
  
  
  
  