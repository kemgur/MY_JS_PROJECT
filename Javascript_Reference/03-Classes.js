/*
JavaScript Classes
A class is a type of function,
 but instead of using the keyword function 
 to initiate it, we use the keyword class,
  and the properties are assigned 
  inside a constructor() method:
(Sınıf bir işlev türüdür, 
    ancak onu başlatmak için
     anahtar sözcük işlevini kullanmak yerine,
      sınıf anahtar sözcüğünü kullanırız ve 
      özellikler bir constructor () 
      yönteminin içinde atanır:)
  */

//Example:
//Create a Car class, and then create an object called "mycar" based on the Car class:
class Car{
    constructor(brand){
        this.carname=brand;
    }
}
mycar= new Car("Ford");