import java.util.Scanner;
import java.util.regex.MatchResult;

public class TextBlock {
  public static void main(String[] args) {
    String NameBlock = """
    One Two 
    three
    four five
    five
    Five
    one Two """;
    try(Scanner scan = new Scanner(NameBlock)){
      scan.findAll("five").map(MatchResult::group).forEach(System.out::println);
    }
  }
}
//this is a case sensative as Scanner in default is case-sensative in nature:
// public class TextBlock {

//     public static void main(String[] args) {
//         String textBlock = """
//             This is a text block.
//             It can span multiple lines
//             and preserves formatting.
//             """;

//         System.out.println(textBlock);
//     }
// }
// scan.findAll("word to be found").map(MatchResult::group).for (sysouut ::ptrintln {
  
}
