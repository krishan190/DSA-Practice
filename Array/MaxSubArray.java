import java.util.*;


// brute for approach : Time complexity O(n^3)
public class MaxSubArray{
    
    public static void maxSubArray(int numbers[]){
        int maxSum = Integer.MIN_VALUE;
        
        for(int i=0;i<numbers.length;i++){
            int start=i;
           for(int j=i;j<numbers.length;j++){
             int end = j;
             int currSum = 0;
                for(int k=start;k<=end;k++){
                 currSum+=numbers[k];
         }
         System.out.println(currSum);
         if(maxSum<currSum){
             maxSum=currSum;
         }
         }
        }
        System.out.println("Max sum is " + maxSum);
    }
    
    public static void main(String [] args){
        int arr[]= {1,2,3,4,5,6};
        maxSubArray(arr);
    }
}



// optimize approach (using prefix sum)

import java.util.*;

public class MaxSubArray{
    
    public static int maxSubArray(int numbers[]){
          int currSum = 0;
        int maxSum = Integer.MIN_VALUE;
        int prefix[]= new int[numbers.length];
        prefix[0]=numbers[0];
        // calculate prefix array
        
        for(int i=1;i<prefix.length;i++){
            prefix[i]=prefix[i-1]+numbers[i];
        }
        
        for(int i=0;i<numbers.length;i++){
            int start =i;
            for(int j=i;j<numbers.length;j++){
                int end = j;
                currSum = start==0?prefix[end]:prefix[end]-prefix[start-1];
                
                if(maxSum<currSum){
                    maxSum=currSum;
                }
            }
        }
        
        System.out.println("Max sum is " +maxSum);
    }
    
    public static void main(String [] args){
        int arr[]= {1,2,3,4,5,6};
        maxSubArray(arr);
    }
}


