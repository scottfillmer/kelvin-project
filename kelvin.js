// variable for kelvin
const kelvin = 293;

// converts kelin to celcius
const celsius = kelvin - 273;

// converts celcius to fahreheit
let fahrenheit = celsius * (9 / 5) + 32;

// rounds the number down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// converts celsius to newton
let newton = celsius * (33 / 100);

// round the number down
newton = Math.floor(newton);

console.log(`The temerature is ${newton} degrees Newton.`);