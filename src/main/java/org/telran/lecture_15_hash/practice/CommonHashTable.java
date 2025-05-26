package org.telran.lecture_15_hash.practice;

/**
 * Простая реализация хеш-таблицы с цепочечной обработкой коллизий.
 * Использует массив связных списков (Entry), коэффициент загрузки и простую хеш-функцию.
 */
public class CommonHashTable {

    /**
     * Внутренний класс, представляющий элемент таблицы.
     */
    private class Entry {
        private Object key;
        private Object value;
        private Entry next;

        /**
         * Конструктор создаёт новую запись с заданным ключом и значением.
         *
         * @param key   ключ
         * @param value значение
         */
        public Entry(Object key, Object value) {
            // 1. Сохрани key и value в соответствующие поля.
            // 2. next по умолчанию должен быть null.
        }

        // 3. Реализуй геттеры: getKey(), getValue(), getNext()
        // 4. Реализуй сеттеры: setValue(value), setNext(next)
    }

    // 5. Объяви массив Entry[] table для хранения цепочек.
    // 6. Объяви переменные capacity (ёмкость таблицы) и size (количество элементов).
    // 7. Установи константу LOAD_FACTOR (например, 0.75).

    /**
     * Конструктор с указанием начальной ёмкости.
     *
     * @param initialCapacity начальная вместимость таблицы
     */
    public CommonHashTable(int initialCapacity) {
        // 8. Проверь, что initialCapacity > 0, иначе выбрось IllegalArgumentException.
        // 9. Инициализируй table с указанной вместимостью.
        // 10. Установи начальное значение size = 0.
    }

    /**
     * Конструктор по умолчанию (вместимость 16).
     */
    public CommonHashTable() {
        // 11. Вызови основной конструктор с параметром 16.
    }

    /**
     * Хеш-функция для ключей.
     *
     * @param key ключ
     * @return положительное хеш-значение
     */
    private int hash(Object key) {
        // 12. Если key — Integer: верни Math.abs((Integer) key).
        // 13. Если key — String: используй формулу: hash = hash * 31 + charAt(i).
        // 14. Иначе: используй key.hashCode().
        // 15. Верни абсолютное значение хеша.
        throw new UnsupportedOperationException("Method hash not implemented yet");
    }

    /**
     * Получает индекс массива по ключу.
     *
     * @param key ключ
     * @return индекс в массиве table
     */
    private int getIndex(Object key) {
        // 16. Верни hash(key) % capacity.
        throw new UnsupportedOperationException("Method getIndex not implemented yet");
    }

    /**
     * Добавляет или обновляет элемент по ключу.
     *
     * @param key   ключ
     * @param value значение
     */
    public void put(Object key, Object value) {
        // 17. Если текущая загрузка (size / capacity) >= LOAD_FACTOR — вызови resize().
        // 18. Получи индекс для key через getIndex(key).
        // 19. Создай новый Entry(key, value).
        // 20. Если table[index] == null — запиши новый элемент и увеличь size.
        // 21. Иначе — пройдись по цепочке:
        //     а. Если найден элемент с таким же key — обнови его value и вернись.
        //     б. Иначе — добавь новый элемент в конец цепочки и увеличь size.
    }

    /**
     * Увеличивает размер таблицы и перераспределяет все элементы.
     */
    private void resize() {
        // 22. Удвоить capacity.
        // 23. Сохрани старую table.
        // 24. Создай новую table с новой capacity.
        // 25. Обнули размер (size = 0).
        // 26. Для каждой цепочки в старой таблице:
        //     пройдись по всем элементам и вставь их в новую таблицу через put().
    }

    /**
     * Получает значение по ключу.
     *
     * @param key ключ
     * @return значение или null
     */
    public Object get(Object key) {
        // 27. Получи индекс через getIndex(key).
        // 28. Пройдись по цепочке:
        //     если key найден — верни value.
        //     если дошли до конца — верни null.
        throw new UnsupportedOperationException("Method get not implemented yet");
    }

    /**
     * Удаляет элемент по ключу.
     *
     * @param key ключ
     * @return значение удалённого элемента или null
     */
    public Object remove(Object key) {
        // 29. Получи индекс через getIndex(key).
        // 30. Пройдись по цепочке:
        //     а. Если найден элемент — удали его из цепочки (обнови ссылки).
        //     б. Уменьши size и верни его value.
        //     в. Если не найден — верни null.
        throw new UnsupportedOperationException("Method remove not implemented yet");
    }

    /**
     * Проверяет наличие ключа.
     *
     * @param key ключ
     * @return true, если ключ найден
     */
    public boolean containsKey(Object key) {
        // 31. Используй метод get(key), верни true, если результат не null.
        throw new UnsupportedOperationException("Method containsKey not implemented yet");
    }

    /**
     * Возвращает количество элементов.
     *
     * @return размер таблицы
     */
    public int size() {
        // 32. Верни переменную size.
        return 0;
    }

    /**
     * Проверяет, пуста ли таблица.
     *
     * @return true, если size == 0
     */
    public boolean isEmpty() {
        // 33. Верни результат size == 0.
        return false;
    }

    /**
     * Очищает таблицу.
     */
    public void clear() {
        // 34. Создай новый пустой массив table и обнули size.
    }

    /**
     * Возвращает массив всех значений.
     *
     * @return массив значений
     */
    public Object[] values() {
        // 35. Создай массив размера size.
        // 36. Пройдись по всем цепочкам в table и скопируй значения в массив.
        return new Object[0];
    }

    /**
     * Выводит таблицу в консоль (для отладки).
     */
    public void printTable() {
        // 37. Пройдись по каждому индексу table.
        // 38. Для каждой цепочки выведи ключи и значения, укажи длину цепочки.
    }

    /**
     * Пример использования.
     *
     * @param args аргументы командной строки
     */
    public static void main(String[] args) {
        // 39. Создай таблицу и вызови put() с разными ключами.
        // 40. Вызови printTable(), get(), remove(), containsKey() для проверки.
    }
}
