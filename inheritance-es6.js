class Car {
    constructor(name, model, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10){
        this.name = name;
        this.model = model;
        this.year = year;
        this.maxSpeed= maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName(){
        return `car brand name: ${this.name} + Model:${this.model}`;
     }
     getAge(){
        let age = 2021;
        return `This year:${age} Year of car production:${this.year}. Car age: ${age}-${this.year}`;
     }
     changeColor(color) {
        if (this.color != color){
            console.log(`you have chose:${this.color=color}`);
         } else {`Your car is painted in ${color}, change the color`};
 
    }
    calculateWay(fuel, kilometers){

        let averageTravelTime = kilometers / 90;
        console.log(`Distance traveled: ${kilometers}km,
        Your average travel time ${Math.floor(middleTimeValue * 10) / 10} hours`);
    
       if (fuel < 10) {
         console.log(`You need to refuel the car on ${this.fuelCapacity - fuel} litres`);
       }

       class BMW extends Car {
        constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, сruiseСontrol = false) {
          super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
          
          this.сruiseСontrol = сruiseСontrol;
          this.climatControl = true;
        }  
        
      
        сruiseСontrol() {
          if(this.сruiseСontrol) {
            this.сruiseСontrol = !сruiseСontrol;
            return 'cruise control off';
          } else {
            this.сruiseСontrol = !сruiseСontrol;
            return 'cruise control on';
          }
        };
      
      }
      
      class Lexus extends Car {
        constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, abs = true) {
          super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
          
          this.abs = abs;
        }  
      
        abs() {
          if(this.abs) {
            return 'abs off';
          } else {
            return 'abs on';
          }
        }
      
      }

      class FIAT extends Car {
        constructor(name, model, year, color,  maxSpeed, capacity, fuelCapacity, fuelConsumption) {
          super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
      
        }  
      

         