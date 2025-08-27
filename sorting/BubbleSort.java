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