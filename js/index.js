const cars = [
  { model: 'Corolla', topSpeed: 120 },
  { model: 'Civic', topSpeed: 130 },
  { model: 'Mustang', topSpeed: 160 },
  { model: 'Camaro', topSpeed: 170 },
  { model: 'M3', topSpeed: 180 }
];

let speed = []

for(let i=0; i<topSpeed.length; i++) {
  const car = cars[i];
  
  if(car.topSpeed>150) {
      speed.push(car)
  }
};

console.log(car)



// const cars = [
//     { model: 'Corolla', topSpeed: 120 },
//     { model: 'Civic', topSpeed: 130 },
//     { model: 'Mustang', topSpeed: 160 },
//     { model: 'Camaro', topSpeed: 170 },
//     { model: 'M3', topSpeed: 180 }
//   ];
  
//   const filteredByTopSpeed = [];
//   const filteredByModel = [];
  
//   const desiredTopSpeed = 180; 
//   const desiredModel = 'M3'; 
  
//   for (let i = 0; i < cars.length; i++) {
//     if (cars[i].topSpeed >= desiredTopSpeed) {
//       filteredByTopSpeed.push(cars[i]);
//     }
// }

  
  