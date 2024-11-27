const convertToCelsius = function(Fahrenheit) {
  let Celcius = Fahrenheit - 32;
  Celcius *= 5/9;
  let round = 0;
  if(Celcius % 1 != 0){
    round = 1;
  }
  return +Celcius.toFixed(round);
};

const convertToFahrenheit = function(Celcius) {
  let Fahrenheit = Celcius * 9/5;
  Fahrenheit += 32;
  let round = 0;
  if(Fahrenheit % 1 != 0){
    round = 1;
  }
  return +Fahrenheit.toFixed(round);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
