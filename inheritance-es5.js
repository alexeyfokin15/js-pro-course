function Car (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}
Car.prototype = {
   getFullName:function(){
       return `car brand name: ${this.name} + Model:${this.model}`;
    },
   getAge:function(){
       let age = 2021;
       return `This year:${age} Year of car production:${this.year}. Car age: ${age}-${this.year}`;
   },
   changeColor:function(color){
       if (this.color != color){
           console.log(`you have chose:${this.color=color}`);
        } else {`Your car is painted in ${color}, change the color`};

   },
   calculateWay:function(fuel, kilometers ){

    let averageTravelTime = kilometers / 90;
    console.log(`Distance traveled: ${kilometers}km,
    Your average travel time ${Math.floor(middleTimeValue * 10) / 10} hours`);

   if (fuel < 10) {
     console.log(`You need to refuel the car on ${this.fuelCapacity - fuel} litres`);
   }
 }
};

function BMW(){
    Car.apply(this,arguments)
    this.panoramicRoof = panoramicRoof; ;
};
function Lexus(){
    Car.apply(this,arguments);
    this.climateСontrol = climateСontrol;
};
function FIAT(){
    Car.apply(this,arguments);
    this.fixItAgainTony=fixItAgainTony
};

