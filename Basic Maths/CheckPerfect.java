import java.util.Scanner;
class Main {
     public static boolean isPerfect(int n){
         if(n<=1) return false;
         int sum=0;
          for(int i = 1; i <= n / 2; i++){
                if(n % i == 0){
                sum += i;
            }
        }
         return sum == n;
    }
    
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("First Number is");
        int n1=sc.nextInt();
        if(isPerfect(n1)){
           System.out.println(n1 +" is Perfect number"); 
        }else{
           System.out.println(n1 +" is not Perfect number"); 
        }
    }
}