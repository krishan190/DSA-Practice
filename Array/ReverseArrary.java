public class ReverseArray{

   public static void reverse(int numbers[]){

     int first =0, last = numbers.length-1;

     while(first<last){
        int temp = numbers[last];
        numbers[last]= numbers[first];
        numbers[first]= temp;

        first++;
        last--;
     }
   }
    

    public static void main(String[] args){
        int arr[] = {4,5,6,7,8,9};
        reverse(arr);

        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]+" ");
        }
        System.out.println();
    }
}