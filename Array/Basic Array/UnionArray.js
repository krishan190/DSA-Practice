
function FindUnion(arr1, arr2) {
    let freq = new Map();

    for (let i = 0; i < arr1.length; i++) {
        freq.set(arr1[i], (freq.get(arr1[i]) || 0) + 1);
    }

    for (let i = 0; i < arr2.length; i++) {
        freq.set(arr2[i], (freq.get(arr2[i]) || 0) + 1);
    }

    let union = Array.from(freq.keys()).sort((a, b) => a - b);

    return union;
}


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];
let Union = FindUnion(arr1, arr2);

console.log("Union of Array", Union);
