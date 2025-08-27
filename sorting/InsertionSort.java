import java.util.*;


// Insertion Sort ==> after comparing elements to the left
//                    shift elements to the right to make room to insert a value

// Quadratic time => O(n^2)
// small data set => Decent
// large data set => BAD

// less steps than bubble sort
// Best case is O(n) compared to selection sort O(n^2)

public class SortArray{
    
    public static void SelectionSort(int arr[],int n){
        for(int i=1;i<n;i++){
            int temp=arr[i];
            int j=i-1;
            
            while(j>=0 && arr[j]>temp){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=temp;
        }
    }
    
    public static void main(String [] args){
        int arr[]= {4,3,2,1,6,7,8,9,5};
        int n = arr.length;
        SelectionSort(arr,n);
        
        // System.out.println("Sorted Array");
        // for(int i=0;i<n;i++){
        //     System.out.print(arr[i] + " ");
        // }
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}