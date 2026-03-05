public class BinarySearchClass{

    public static int BinarySearch(int arr[],int key){

        int start=0;
        int end = arr.length-1;


         while(start<=end){
              int mid = (start+end)/2;

              if(arr[mid]==key){
                return mid;
              }
              if(arr[mid]<key){ //right
                  start = mid+1;
              }
              else{ //left
                  end=mid-1;
              }
         }
         return -1;
    }

    public static void main(String args[]){
        int arr[]= {2,4,6,8,10,12,14,16,18};
        int key = 10;

        int index = BinarySearch(arr,key);

        if(index==-1){
            System.out.println("Not found element in the arrar");
        }else{
            System.out.println("key is at index : " + index);
        }
    }
}