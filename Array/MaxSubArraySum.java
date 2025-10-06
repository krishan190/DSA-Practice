import java.util.*;

public class ArrayCC{

    public static void MaxSubArraySum(int numbers[]){
        int prefixSum[]=new int[numbers.length];

        prefixSum[0]=numbers[0];

        for(int i=1;i<numbers.length;i++){
            prefixSum[i]=prefixSum[i-1]+numbers[i];
        }

        
    }



    public static void main(String[] args){
        int arr[]={1,2,3,4,5};

        System.out.println(MaxSubArraySum(arr))
    }
}