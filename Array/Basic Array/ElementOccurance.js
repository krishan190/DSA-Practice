const arr = [1, 1, 2, 3, 1, 4];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);

// What will be the output of this question

const firstName = fun();
let name = "krishan";

function fun() {
  return `my name is ${name} Namdev`;
}
console.log(firstName); //Reference Error can't access name before initialization
