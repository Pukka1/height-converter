//Get all fields//
const feet_field = document.querySelector('.Feet');
const inches_field = document.querySelector('.Inches');
const convert = document.querySelector('.convert');
const meters_field = document.querySelector('.Meters');

//create function to convert to meters//
function heightconverter(feet, inch) {
  let Meters = feet * 0.3048 + inch
  * 0.0254;
  Meters = Meters.toFixed(2);
  return Meters;
}


// define fields//
function buttonreturn() {
let inches_value =inches_field.value;
inches_value = parseFloat(inches_value);

let feet_value = feet_field.value;
feet_value = parseFloat(feet_value);


Meters = heightconverter(feet_value, inches_value);
meters_field.value= Meters;
}

//listen for changes
convert.addEventListener('click', buttonreturn);
