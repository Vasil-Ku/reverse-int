module.exports = function reverse (n) {
  let arr = [], i = 0, num = Math.abs(n), s = 0;
  while (num !== 0) {
    i++;
    arr[i] = num % 10;
    num = Math.floor(num/10);
  }
  for (let k = 1; k <= i; k++) {
    s = 10*s + arr[k];
  }
  return s;
}