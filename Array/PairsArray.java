public class PairsArrayProblem{

    public static void printPairs(int numbers[]){
        for(int i=0;i<numbers.length;i++){
            int curr = numbers[i];
            for(int j=i+1;j<numbers.length;j++){
                System.out.println("(" + curr + "," + numbers[j] + ")");
            }
            Systme.out.println();
        }
    }

     public static void main(String [] args){
        int arr[]={2,3,4,5,6,7};

         printPairs(arr);
     }

}