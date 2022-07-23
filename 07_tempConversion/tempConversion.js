const ftoc = function(temperature) {
    let celsius = (temperature-32) * (5/9)
    return round(celsius,1)
};

const ctof = function(temperature) {
    let fahrenheit = (temperature* (9/5)) +32
    return round(fahrenheit,1)
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
