class Node {
    int data;
    Node left;
    Node right;
}



public static void preOrder(Node root) {
    System.out.printf("%d " , root.data, " ");
    if (root.left != null) {
        preOrder(root.left);
    }
    if (root.right != null) {
        preOrder(root.right);
    }
}
