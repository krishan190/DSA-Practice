/*

Selection Sort Algorithm

Start with the first element of the array.

Assume the current index i is the minimum element.

Compare this element with the rest of the elements in the array.

If a smaller element is found, update the minimum index.

After completing the inner loop, swap the minimum element with the element at index i.

Move to the next position and repeat the process.

Continue until the array is fully sorted

*/

import java.util.*;

public class SortArray{
    
    public static void SelectionSort(int numbers[],int n){
        for(int i=0;i<n-1;i++){
            int min=i;
            for(int j=i+1;j<n;j++){
                if(a[j]<a[min]){
                    min=j;
                }
            }
            if(min!=i){
                // swap the array
                int temp;
                temp=a[i];
                a[i]=a[min];
                a[min]=temp;
            }
        }
    } 
    
    public static void main(String [] args){
        int arr[]= {7,4,10,8,3,1};
        int n = arr.length;
        SelectionSort(arr,n);
        
        // System.out.println("Sorted Array");
        // for(int i=0;i<n;i++){
        //     System.out.print(arr[i] + " ");
        // }
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}