/*
🧠 Ekdum simple logic flow
Har transaction uthao
Pehle check karo → duplicate hai kya?
Agar nahi → timestamp ka difference check karo
Agar dono safe → next transaction
End tak sab safe → print "All Transactions Valid"



A B 10
C D 50
E F 100

No duplicate ✅
Time gaps: 40, 50 (<=60) ✅

👉 Output: All Transactions Valid


A B 10
C D 50
A B 70

👉 A→B repeat ho gaya ❌

👉 Output: Error: Duplicate Transaction

A B 10
C D 50
E F 200

👉 200 - 50 = 150 (>60) ❌

👉 Output: Fraud Detected
*/


import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        Set<String> seen = new HashSet<>(); // sender-receiver pairs
        int prevTime = -1; // previous timestamp

        for (int i = 0; i < N; i++) {
            String sender = sc.next();
            String receiver = sc.next();
            int timestamp = sc.nextInt();
            int amount = sc.nextInt();

            // Rule 1: Duplicate Transaction Check
            String key = sender + "-" + receiver;

            if (seen.contains(key)) {
                System.out.print("Error: Duplicate Transaction");
                return;
            }

            seen.add(key);

            // Rule 2: Fraud Detection (> 60 sec gap)
            if (prevTime != -1 && (timestamp - prevTime > 60)) {
                System.out.print("Fraud Detected");
                return;
            }

            // update previous time
            prevTime = timestamp;
        }

        // If all transactions pass
        System.out.print("All Transactions Valid");
    }
}