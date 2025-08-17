// ArrayList is a part of java collection framework

import java.util.ArrayList;

public class ClassRoom{
    public static void main(String args[]){
        ArrayList<Integer> list1 = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>();
        ArrayList<Integer> list3 = new ArrayList<>();

//     Add Operation

        list1.add(1); //O(1)
        list1.add(2);
        list1.add(3);
        list1.add(4);


//      Get Operation
        int element = list1.get(4);
        System.out.println(element);

//      Delete Operation  O(n)
        list1.remove(2);
        System.out.println(list1);

//       Set Element at index O(n)
         list1.set(2,10);
        System.out.println(list1);

//       Contains Element O(n)
         System.out.println(list1.Contains(1)) //it return always true or false

    }
}