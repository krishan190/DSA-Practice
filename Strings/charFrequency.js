let string = "Hello everyone Krishan Namdev this side";
let frequency = {};

for (let index of string) {
    if (frequency[index]) {
        frequency[index]++;
    } else {
        frequency[index] = 1
    }
}

console.log(frequency);

//count of each character even including space

/*🔹 Algorithm (Step-by-step)
Start
Take the input string str
Loop through each character in the string
For each character:
Find its first position using indexOf(char)
Find its last position using lastIndexOf(char)
Compare both positions:
If they are equal → character appears only once
Return that character immediately
If no such character is found → return null (or "not found")
End */

function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}
let str = "aabbcddffe";

console.log(firstNonRepeatingChar(str));


// 

function showMarks(marks) {
    const msg = marks || "No marks provided";
    //   const msg=marks || "No marks provided";  // fix this by using ??
    console.log(`Grade: ${msg}`);
}

showMarks(90);
showMarks();
showMarks(0);
showMarks(40);

// || returns the first truthy value.
// ?? returns the first defined value.

