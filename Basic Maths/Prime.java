import java.util.Scanner;

class Main {
    public static boolean isPrime(int n){
        if(n <=1 || n%2==0 ){
            return false;
        }
        if(n==2) return true;

        for(int i = 3; i <= Math.sqrt(n); i += 2){
            if(n % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number:");
        int n = sc.nextInt();

        if(isPrime(n)){
            System.out.println(n + " is a Prime number");
        } else {
            System.out.println(n + " is NOT a Prime number");
        }
    }
}