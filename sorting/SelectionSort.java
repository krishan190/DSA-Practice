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