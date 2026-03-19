import java.util.Scanner;

class Main {
    public static boolean isPrime(int n){
        if(n <=1 || n%2==0 ){
            return false;
        }
        if(n==2) return true;
        
        for(int i=3;i<=Math.sqrt(n);i+=2){
            if(n%i==0)return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
       Scanner sc= new Scanner(System.in);
       
       System.out.println("Enter first Number");
       int n1=sc.nextInt();
       
       System.out.println("Enter Second Number");
       int n2=sc.nextInt();

       for(int i=n1;i<=n2;i++){
        if(isPrime(i)){
            System.out.println(i);
          }
       }
    }
}