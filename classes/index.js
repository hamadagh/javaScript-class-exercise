// #### 1. Person Class
// Create a class called Person which accepts the name of a person as a string,
//  and his/her age as a number. The Person class should have a method called describe 
//  which returns a string with the following syntax: "name, age years old". So for example, 
//  if John is 19 years old then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }  
    describe() {
    return console.log(`${this.name} is ${this.age} years old !!`)
    }
}

const User = new Person("rameez", 24);
User.describe();






// #### 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal 
//places using object classes. 
// * Note: Volume of a cylinder : V = πr2h - r is the radius and h is the height of the cylinder.


class Cylinder {
  constructor(radius, height){
      this.radius = radius;
      this.height = height;
  }
  get volume() {
      return(Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}
const Cylinder1 = new Cylinder(10,20);
console.log(Cylinder1.volume);


// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 
// ```javascript
//   function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();
// ```


// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class Tv {
  constructor(brand){
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  incVolume(volume){
 
 
 
    if (this.volume < 0){
   console.log(`that volume is too low`);
   
  }
  else if(this.volume > 100){
    console.log(`that volume is too high`);
    
  }
 
}
  decVolume(volume){
    if (this.volume < 0){
      console.log(`that volume is too low`);
    }
    else if(this.volume > 100){
      console.log(`that volume is too high`);
      return this;
    }
  }

  setChannel(){
    if (this.channel >= 50){
      console.log(`Sorry There are not enough Channel`);
      return this;
      
    }
  }
 

  resetTv(){
    this.channel = 1;
    this.volume = 50;
    
  }

  status(){
    console.log(`${this.brand} at channel: ${this.channel}, Volume: ${this.volume}`)
  }
 
}
const newTv = new Tv("Sony");
console.log(newTv.status()); 



// #### 5. Circle
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
//The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective
// areas and perimeter (circumference).

// Look at the example of a Rectangle constructor which can help you in getting started. 

// ```javascript
// class Rectangle {
//   constructor(sideA,sideB){
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
//   getArea(){return this.sideA*this.sideB};
//   getPerimeter(){return (this.sideA + this.sideB) *2 };
// 

// ```
// * Example: 
// ```javascript
// let circ = new Circle(11);
// circ.getArea();

// // Should return 380.132711084365.

// let circ = new Circle(4.44);
// circ.getPerimeter();

// // Should return  27.897342763877365
// ```

class Circle {
  constructor(radius){
  this.radius = radius;
  
  }
   getArea(){
     return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    };

  getPerimeter(){
    return (2 * Math.PI * this.radius).toFixed(2);
  };
 }

 const circle = new Circle(10);
 console.log(circle.getArea, circle.getPerimeter);
 
 

