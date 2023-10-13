public class MultipleMessage {
  public static void main(String[] args) {
    Message1.MessageA();
    Message2.MessageB();
  }
}
    class Message1{
        void MessageA(){
        System.out.println("Message One");
      }
    }
    class Message2{
      static void MessageB(){
        System.out.println("Message Two");
      }
}
