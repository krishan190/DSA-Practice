import java.util.*;

public class ArrayCC{

    public static int[] PrefixSum(int numbers[]){
        int prefixSum[]=new int[numbers.length];

        prefixSum[0]=numbers[0];

        for(int i=1;i<numbers.length;i++){
            prefixSum[i]=prefixSum[i-1]+numbers[i];
        }

        return prefixSum;
    }

    public static void main(String[] args){
        int arr[]={1,2,3,4,5};

        //another way print prefixSum array
        int originalArray[]=PrefixSum(arr);
        System.out.print("[");
        for(int i=0;i<originalArray.length;i++){
            System.out.print(originalArray[i] +",");
        }
        System.out.print("]");
    }
}