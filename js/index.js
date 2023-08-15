const cars = [
  { 
      model: 'Corolla', 
      topSpeed: 120,
      description: 'A reliable and fuel-efficient compact car.',
      price: '$20,000',
      image: 'corolla.jpg'
  },
  { 
      model: 'Civic', 
      topSpeed: 130,
      description: 'A popular and versatile sedan with great fuel economy.',
      price: '$22,000',
      image: 'civic.jpg'
  },
  { 
      model: 'Mustang', 
      topSpeed: 160,
      description: 'An iconic American muscle car known for its powerful performance.',
      price: '$30,000',
      image: 'mustang.jpg'
  },
  { 
      model: 'Camaro', 
      topSpeed: 170,
      description: 'A classic muscle car with a sleek design and impressive speed.',
      price: '$28,000',
      image: 'camaro.jpg'
  },
  { 
      model: 'M3', 
      topSpeed: 180,
      description: 'A high-performance luxury sports sedan with top-tier engineering.',
      price: '$45,000',
      image: 'm3.jpg'
  }
];

const filteredByTopSpeed = [];
const filteredByModel = [];

const desiredTopSpeed = 180; 
const desiredModel = 'M3'; 

for (let i = 0; i < cars.length; i++) {
  if (cars[i].topSpeed >= desiredTopSpeed) {
    filteredByTopSpeed.push(cars[i]);
  }
}

// let speed = []

// for(let i=0; i<topSpeed.length; i++) {
//   const car = cars[i];
  
//   if(car.topSpeed>150) {
//       speed.push(car)
//   }
// };

$(document).ready(function(){
  //select the plants container and add html from our template 
      
  
  //you have to call it only when ready/loaded
      loadPlants();
  });
  
  
  function loadPlants () {
      for (let i = 0; i < cars.length; i++) {
          console.log(cars[i]);
  
          $("#plantsContainer").append($("#plantCardTemplate").html());
  
          let currentChild = $("#plantsContainer").children().eq(i+1);
  
          $(currentChild).find(".card-img-top").attr('src','assets/' + cars[i].image);
  
          $(currentChild).find("#nameText").text(cars[i].model);
  
          $(currentChild).find("#priceText").text('R ' + cars[i].price);
          
          $(currentChild).find("#speedText").text( cars[i].topSpeed + 'km/h' );
  
          $(currentChild).find("#descriptionText").text(cars[i].description);
  
          $(currentChild).find("#descriptionText").hide();
          
          
      }
  }
  
  
  $("#plantsContainer").on('click', '.card', function(){
  
    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });



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

  
  