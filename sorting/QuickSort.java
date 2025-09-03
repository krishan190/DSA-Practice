import java.util.*;

public class SortArray{
    
    public static void quickSort(int arr[],int lb,int ub){
        if(lb<ub){
            int loc=partition(arr,lb,ub);
            quickSort(arr,lb,loc-1);
            quickSort(arr,loc,ub);
        }
    }

    public static int partition(int arr[],int lb,int ub){
        int pivot=arr[lb];
        int start=lb;
        int end=ub;

        while(start<end){
            while(arr[start]<=pivot){
                start++;
            }
            while(arr[end]>pivot){
                end--;
            }
            if(start<end){
                // swap logic here
                int temp;
                temp=arr[start];
                arr[start]=arr[end];
                arr[end]=temp;
            }
        }
        //if initial while loop is false then again swap lb to arr[end]

        int temp;
        temp=arr[lb];
        arr[lb]=arr[end];
        arr[end]=temp;

        return end;
    }
    
    public static void main(String [] args){
        int arr[]= {7,6,10,5,9,2,1,15,7};

        System.out.println("Before Sorting: ");
        for(int num:arr){
            System.out.println(num + " ");
        }
        quickSort(arr,0,arr.length-1);

        System.out.println("\n After Sorting: ");
        for(int num:arr){
            System.out.println(num + " ");
        }

    }
}