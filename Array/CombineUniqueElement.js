


const array1=[1,2,3,4,5]
const array2=[4,5,6,7,8]

const combinedUniqueArray=[...new Set([...array1,...array2])]

console.log(combinedUniqueArray) // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// other way

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const combinedUnique = Array.from(new Set(arr1.concat(arr2)));
console.log(combinedUnique); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


const result = []
for(let i = 0 ; i < array1.length ; i++){
    if(array2.includes(array1[i])){
        result.push(array1[i])
    }
}
console.log(result)

let array3=[1,3,4,5,6]
let array4=[4,5,3,6,1]
const filteredArray=array3.filter(value=>array4.includes(value));
console.log(filteredArray);