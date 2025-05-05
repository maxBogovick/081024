package org.telran.lecture_12_trees.practice;

import org.telran.utils.TreePrinter;

public class BinarySearchTree {
    private Node root;
    private TreePrinter<Node> treePrinter;
    private int length = 0;

    /**
     * Конструктор для создания нового бинарного дерева поиска.
     */
    public BinarySearchTree() {
        root = null;
        treePrinter = new TreePrinter<>(node-> String.valueOf(node.getValue()), Node::getLeft, Node::getRight);
        treePrinter.setTspace(2);
        treePrinter.setSquareBranches(true);
        treePrinter.setLrAgnostic(false);
        treePrinter.setHspace(2);
    }

    /**
     * Вставляет новый узел в дерево.
     *
     * @param value Значение нового узла.
     */
    public void insert(int value) {
        /*if (root == null) {
            root = new Node(value); //10
        }
        if (value < root.getValue()) {
            root.setLeft(new Node(value));
        }
        else if (value > root.getValue()) {
            root.setRight(new Node(value));
        }
        // TODO: реализуйте метод вставки узла
        throw new UnsupportedOperationException("insert() is not implemented yet");*/
        root = insertNodeRec(root, value);
    }

    /**
     * Рекурсивно вставляет новый узел в поддерево.
     *
     * @param node  Текущий узел.
     * @param value Значение.
     * @return Новый корень поддерева.
     */
    private Node insertNodeRec(Node node, int value) {
        if (node == null) {
            length++;
            return new Node(value);
        }
        if (value < node.getValue()) {
            node.setLeft(insertNodeRec(node.getLeft(), value));
        }
        else if (value > node.getValue()) {
            node.setRight(insertNodeRec(node.getRight(), value));
        }

        return node;
    }

    /**
     * Ищет значение узла по заданному значению.
     *
     * @param value Значение искомого узла.
     * @return Узел или null.
     */
    public Node getNode(int value) {
        // TODO: реализуйте поиск узла
        throw new UnsupportedOperationException("getNode() is not implemented yet");
    }

    /**
     * Рекурсивно ищет узел с заданным значением.
     */
    private Node searchNodeRec(Node node, int value) {
        // TODO: реализуйте рекурсивный поиск
        throw new UnsupportedOperationException("searchNodeRec() is not implemented yet");
    }

    /**
     * Находит минимальный узел в дереве.
     *
     * @return Узел с минимальным значением или null.
     */
    public Node min() {
        // TODO: реализуйте поиск минимума
        throw new UnsupportedOperationException("min() is not implemented yet");
    }

    /**
     * Находит максимальный узел в дереве.
     *
     * @return Узел с максимальным значением или null.
     */
    public Node max() {
        // TODO: реализуйте поиск максимума
        throw new UnsupportedOperationException("max() is not implemented yet");
    }

    /**
     * Возвращает количество узлов в дереве.
     */
    public int length() {
        return length;
    }

    /**
     * Отображает дерево (например, in-order обход).
     */
    public void displayTree() {
        if (root == null) {
            System.out.println("Дерево пустое.");
            return;
        }
        treePrinter.printTree(root);
    }

    /**
     * Удаляет узел с заданным значением.
     */
    public void remove(int value) {
        // TODO: реализуйте метод удаления узла
        throw new UnsupportedOperationException("remove() is not implemented yet");
    }

    /**
     * Рекурсивно удаляет узел.
     */
    private Node removeRec(Node node, int value) {
        // TODO: реализуйте рекурсивное удаление
        throw new UnsupportedOperationException("removeRec() is not implemented yet");
    }

    /**
     * Проверяет, содержится ли значение в дереве.
     */
    public boolean contains(int value) {
        // TODO: реализуйте метод contains
        throw new UnsupportedOperationException("contains() is not implemented yet");
    }

    /**
     * Пример использования дерева.
     */
    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(3);
        bst.insert(5);
        bst.insert(4);
        bst.insert(11);
        bst.insert(15);
        bst.insert(12);
        bst.insert(16);
        bst.displayTree(); // TODO: после реализации должен напечатать дерево
    }
}
