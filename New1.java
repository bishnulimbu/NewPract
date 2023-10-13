
import java.util.Scanner;
import java.util.regex.MatchResult;

public class New1 {
    public static void main(String[] args) {
        String text = """
            An apple is a sweet fruit.
            Apples come in various colors.
            The apple tree produces apples.
            I love eating apples.
            """;

        int count = 0;

        try (Scanner scanner = new Scanner(text)) {
            while (scanner.findWithinHorizon("apple", 0) != null) {
                count++;
            }
        }

        System.out.println("The word 'apple' appears " + count + " times in the text.");
    }
}
