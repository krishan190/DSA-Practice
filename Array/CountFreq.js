function countFreq(arr, n) {
    let visited = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            console.log("inside visited", visited[i], i);
            continue;
        }
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log(arr[i], count);
    }
}

// optimial Approach


function countFreq(arr, n) {
    const map = new Map();

    // Traverse the array and count frequencies
    for (let i = 0; i < n; i++) {
        console.log(map.set(arr[i], (map.get(arr[i]) || 0) + 1));
    }

    // Traverse through the Map and print frequencies
    map.forEach((value, key) => {
        console.log(key, value);
    });

}

const arr = [10, 5, 10, 15, 10, 5];
const n = arr.length;
countFreq(arr, n);