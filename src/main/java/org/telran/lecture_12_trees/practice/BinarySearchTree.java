package org.telran.lecture_12_trees.practice;

public class BinarySearchTree {
    private Node root;
    private int length = 0;

    /**
     * Конструктор для создания нового бинарного дерева поиска.
     */
    public BinarySearchTree() {
        // TODO: инициализируйте дерево при необходимости
    }

    /**
     * Вставляет новый узел в дерево.
     *
     * @param value Значение нового узла.
     */
    public void insert(int value) {
        // TODO: реализуйте метод вставки узла
        throw new UnsupportedOperationException("insert() is not implemented yet");
    }

    /**
     * Рекурсивно вставляет новый узел в поддерево.
     *
     * @param node  Текущий узел.
     * @param value Значение.
     * @return Новый корень поддерева.
     */
    private Node insertNodeRec(Node node, int value) {
        // TODO: реализуйте рекурсивную вставку
        throw new UnsupportedOperationException("insertNodeRec() is not implemented yet");
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
        // TODO: реализуйте подсчёт количества узлов
        throw new UnsupportedOperationException("length() is not implemented yet");
    }

    /**
     * Отображает дерево (например, in-order обход).
     */
    public void displayTree() {
        if (root == null) {
            System.out.println("Дерево пустое.");
            return;
        }
        // TODO: реализуйте вывод дерева
        throw new UnsupportedOperationException("displayTree() is not implemented yet");
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
        bst.insert(3); // TODO: после реализации insert метод должен вставить значение
        bst.displayTree(); // TODO: после реализации должен напечатать дерево
    }
}
