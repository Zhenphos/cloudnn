module.exports = function(x) {
  x = 1 / (1 + Math.pow(Math.E, -x));
  return x;
}
