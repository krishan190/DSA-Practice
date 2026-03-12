/*
   star>hash (positive Integer)
   star<hash (Negative Integer)
   start=hash (return 0)
*/

function validStringDifference(S) {
  let star = 0;
  let hash = 0;

  for (let ch of S) {
    if (ch === "*") {
      star++;
    } else if (ch === "#") {
      hash++;
    }
  }

  return star - hash;
}

// Example
let S = "**#*##";
console.log(validStringDifference(S));
