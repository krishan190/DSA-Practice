public class BinarySearchClass{

    public static int BinarySearch(int arr[],int key){

        int left=0;
        int right = arr.length-1;


         while(left<=right){
              int mid = (left+right)/2;

              if(arr[mid]==key){
                return mid;
              }
              if(arr[mid]<key){ //right
                  left = mid+1;
              }
              else{ //left
                  right=mid-1;
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