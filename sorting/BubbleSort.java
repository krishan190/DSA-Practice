/*
Algorithm: Optimized Bubble Sort

Start from the first element of the array.

Compare the current element with the next element.

If the current element is greater than the next element, swap them.

Continue comparing adjacent elements until the end of the array.

After each pass, the largest element moves to its correct position at the end.

Repeat the process for the remaining unsorted portion of the array.

Use a swap flag:

If no swaps occur during a pass, the array is already sorted.
Stop the algorithm early

*/

import java.util.*;

public class SortArray{
    
    public static void BubbleSort(int numbers[],int n){
        for(int i=0;i<n-1;i++){
            int swap =0;
            for(int j=0;j<n-1-i;j++){
                if(numbers[j]>numbers[j+1]){
                    int temp = numbers[j];
                    numbers[j]=numbers[j+1];
                    numbers[j+1] = temp;
                    swap=1;
                }
            }
            if(swap==0){
                break;
            }
        }
    }
    
    public static void main(String [] args){
        int arr[]= {15,16,6,8,5};
        int n = arr.length;
        BubbleSort(arr,n);
        
        // System.out.println("Sorted Array");
        // for(int i=0;i<n;i++){
        //     System.out.print(arr[i] + " ");
        // }
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}