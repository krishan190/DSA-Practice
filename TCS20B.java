import java.util.Scanner;

public class DiscountCalculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Following the "integer" note from your image
        System.out.print("Enter amount: ");
        int amount = input.nextInt(); 
        
        double discount;

        if (amount < 1000) {
            discount = 0.05; // 5%
        } else if (amount < 5000) {
            discount = 0.10; // 10%
        } else {
            discount = 0.15; // 15%
        }

        double finalAmount = amount * (1 - discount);

        // %.2f rounds to 2 decimal places and handles the display
        System.out.printf("%.2f%n", finalAmount);
        
        input.close();
    }
}
