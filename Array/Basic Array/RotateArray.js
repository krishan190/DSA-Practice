//Left Rotation

function RotateLeftArray(arr, k) {
  let k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(RotateLeftArray([1, 2, 3, 4, 5], 2)); //[3,4,5,1,2]

// Rigth Rotation

function RotateRightArray(arr, k) {
  let k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

console.log(RotateRightArray([1, 2, 3, 4, 5], 2)); //[4,5,1,2,3]
