let a = 4;
let b = 4;

function add(a, b) {
  console.log(sum); //undefined
  var sum;
  sum = a + b;
  return sum;
}
console.log(add(a, b)); //8
