import java.util.Scanner;

class Main {
    public static boolean isPrime(int n){
        if(n <=1 || n%2==0 ){
            return false;
        }
        if(n==2) return true;
        
        for(int i=3;i<=Math.sqrt(n);i++){
            if(n%i==0)return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
       Scanner sc= new Scanner(System.in);
       
       System.out.println("Enter first Number");
       int n1=sc.nextInt();
       
       System.out.println("Your First Number "+ n1);
       
       if(isPrime(n1)){
           System.out.println(n1 + " is prime number");
       }else{
           System.out.println(n1 + " is not prime number");
       }
    }
}