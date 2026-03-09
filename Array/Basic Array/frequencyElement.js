function frequency(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  return map;
}

console.log(frequency([1, 2, 2, 3, 3, 3])); //{ '1': 1, '2': 2, '3': 3 }

// using map

let arr = [2, 3, 4, 4, 5, 11, 12];
let freq = new Map();
for (let i = 0; i < arr.length; i++) {
  freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
}
console.log(freq);//Map(6) { 2 => 1, 3 => 1, 4 => 2, 5 => 1, 11 => 1, 12 => 1 }

Array.from(freq.keys());//(6) [2, 3, 4, 5, 11, 12]