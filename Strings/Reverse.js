// class ReverseString {
//     public static void main(String[] args) {
//         String original = "PrepInsta";
//         String reversed = "";

//         for (int i = original.length() - 1; i >= 0; i--) {
//             reversed = reversed + original.charAt(i);
//         }

//         System.out.println("Reversed String: " + reversed);
//     }
// }

function isRev(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

console.log(isRev("hello"));
