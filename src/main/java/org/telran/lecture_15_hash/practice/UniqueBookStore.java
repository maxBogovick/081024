package org.telran.lecture_15_hash.practice;

/**
 * Хеш-набор книг с уникальными значениями, реализованный на основе CommonHashTable.
 * Не допускает дубликатов и обеспечивает быстрый поиск, добавление и удаление книг.
 */
public class UniqueBookStore {

    // 1. Объяви поле books — для хранения уникальных книг.

    /**
     * Конструктор, инициализирующий таблицу с заданной вместимостью.
     *
     * @param initialCapacity начальная ёмкость хеш-таблицы
     */
    public UniqueBookStore(int initialCapacity) {
        // 2. Создай новый объект CommonHashTable с переданной вместимостью.
    }

    /**
     * Возвращает текущее количество уникальных книг.
     *
     * @return количество элементов
     */
    public int size() {
        // 3. Верни размер books через вызов size().
        throw new UnsupportedOperationException("Method size not implemented yet");
    }

    /**
     * Добавляет книгу, если она ещё не существует.
     *
     * @param book название книги
     * @return true, если книга добавлена, иначе false
     */
    public boolean add(String book) {
        // 4. Если books уже содержит такой ключ — верни false.
        // 5. Иначе добавь книгу в таблицу с ключом и значением book.
        throw new UnsupportedOperationException("Method add not implemented yet");
    }

    /**
     * Проверяет, содержится ли книга в наборе.
     *
     * @param book название книги
     * @return true, если книга есть в библиотеке
     */
    public boolean contains(String book) {
        // 6. Верни результат вызова containsKey у books.
        throw new UnsupportedOperationException("Method contains not implemented yet");
    }

    /**
     * Удаляет книгу по названию.
     *
     * @param book название книги
     * @return название удалённой книги или null
     */
    public String remove(String book) {
        // 7. Удали запись по ключу book и приведи результат к String.
        throw new UnsupportedOperationException("Method remove not implemented yet");
    }

    /**
     * Печатает содержимое таблицы и общее количество книг.
     */
    public void printTable() {
        // 8. Выведи заголовок, вызови printTable() у books и выведи итоговое количество книг.
    }

    /**
     * Печатает список всех книг.
     */
    public void printAllBooks() {
        // 9. Выведи заголовок, затем пройдись по массиву values() и выведи каждую строку.
    }

    /**
     * Демонстрация работы UniqueBookStore.
     */
    public static void main(String[] args) {
        // 10. Создай экземпляр UniqueBookStore с вместимостью 8.
        UniqueBookStore library = new UniqueBookStore(8);

        System.out.println("=== Демонстрация HashSet для библиотеки ===");
        System.out.println("Добавляем книги в библиотеку:");

        // 11. Объяви массив строк с названиями книг.
        String[] booksToAdd = {
                "Война и мир",
                "Преступление и наказание",
                "Мастер и Маргарита",
                "1984",
                "Гарри Поттер",
                "Властелин колец"
        };

        // 12. Пройди циклом по массиву, вызывая add() и печатая результат.
        for (String book : booksToAdd) {
            boolean added = library.add(book);
            System.out.println("Добавляем '" + book + "': " + (added ? "успешно" : "уже существует"));
        }

        // 13. Выведи текущее состояние таблицы.
        library.printTable();

        // 14. Попробуй добавить дубликат — "1984".
        library.printTable();
        library.printAllBooks();
    }
}
