package org.telran.lecture_15_hash.practice;

/**
 * Класс, содержащий алгоритмы с использованием подхода двух указателей (two pointers).
 */
public class TwoPointers {

    /**
     * Ищет два числа в отсортированном массиве, сумма которых равна целевому значению.
     *
     * @param nums   отсортированный по возрастанию массив
     * @param target целевая сумма
     * @return массив из двух чисел, сумма которых равна target, или пустой массив, если таких нет
     */
    public int[] twoSumSorted(int[] nums, int target) {
        // Создайте два указателя: один на начало массива, другой на конец

        // Пока левый указатель меньше правого
        // Вычислите сумму элементов на позициях указателей

        // Если сумма равна target — верните эти два элемента в массиве

        // Если сумма меньше target — сдвиньте левый указатель вправо

        // Если сумма больше target — сдвиньте правый указатель влево

        // Если ничего не найдено — верните пустой массив
        return new int[]{}; // заглушка
    }

    /**
     * Сортирует массив так, чтобы чётные числа стояли перед нечётными.
     *
     * @param nums массив целых чисел
     * @return массив, где все чётные числа идут перед нечётными (порядок внутри групп не важен)
     */
    public int[] sortArrayByParity(int[] nums) {
        // Создайте два указателя: левый на начало, правый на конец массива

        // Пока левый указатель меньше правого
        // Пропускайте чётные числа слева (left++) и нечётные справа (right--)

        // Если слева нечётное, а справа чётное — поменяйте их местами

        return nums; // после сортировки
    }
}
