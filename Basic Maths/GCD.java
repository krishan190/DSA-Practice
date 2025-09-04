public class ReverseArray{

   public static void gcdFind(int n1,int n2){
     
     int gcd=1;
     for(int i=1;i<=Math.min(n1,n2);i++){
        if(n1%i==0 && n2%i==0){
         gcd = i;
        }
     }
     return gcd;    
   }
    

    public static void main(String[] args){
        int n1=9,n2=12;

        int gcd=gcdFind(n1,n2);

        System.out.println("GCD of " + n1 + " and " + n2 + " is: " + gcd);
    }
}