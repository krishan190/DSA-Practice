// bruteForce Approach

/*✅ Logic

Create a new array
Traverse original array
Push all non-zero elements
Count number of zeros
Add those many zeros at end */

/*
import java.util.*;

public class MoveZeros {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Take size of array
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        // Take array input
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int[] result = moveAllZeros(arr);

        // Print result
        System.out.println("Result array:");
        for (int num : result) {
            System.out.print(num + " ");
        }
    }

    public static int[] moveAllZeros(int[] arr) {
        int[] result = new int[arr.length];
        int index = 0;

        // Add non-zero elements
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                result[index++] = arr[i];
            }
        }

        // Remaining positions are already 0 by default
        return result;
    }
}

*/

// Enter number of elements: 5
// Enter elements:
// 0 1 0 3 12
// Result array:
// 1 3 12 0 0

function moveAllZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount += 1;
    } else {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveAllZeros([0, 1, 0, 3, 12])); //[1,3,12,0,0]
