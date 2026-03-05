const twoSum = (array, goal) => {
    let indexes = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === goal) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
}

// optimal solution

const input = [1, 3, 10, 11, 13];

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const diffIndex = array.indexOf(target - array[i]);
        console.log("diffIndex", diffIndex);
        if (diffIndex >= 0 && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
    return []; // no solution found
}

console.log(twoSum(input, 13));