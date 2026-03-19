import java.util.Scanner;

class Main{
    public static int getFact(int n){
        int fact=1;
        for(int i=n;i>=1;i--){
            fact=fact*i;
        }
        return fact;
    }
    
    public static void main(String[] args){
         Scanner sc=new Scanner(System.in);
         
         System.out.println("Enter the number you want to factorial");
         int n1=sc.nextInt();
         System.out.println("Your first Number is " + n1);
         
         int fact=getFact(n1);
         System.out.println("factorial num " + fact);
    }
}