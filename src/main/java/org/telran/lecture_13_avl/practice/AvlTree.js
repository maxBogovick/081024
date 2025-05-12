/**
 * Узел AVL-дерева
 */
class AVLNode {
    /**
     * @param {number} value значение узла
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Высота нового листа всегда 1
    }

    /**
     * @return {number}
     */
    getValue() {
        return this.value;
    }

    /**
     * @return {AVLNode}
     */
    getLeft() {
        return this.left;
    }

    /**
     * @return {AVLNode}
     */
    getRight() {
        return this.right;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @param {number} height
     */
    setHeight(height) {
        this.height = height;
    }
}

/**
 * Класс реализует самобалансирующееся дерево поиска — AVL-дерево.
 * Основные операции: вставка, удаление, поиск, балансировка дерева.
 */
class AvlTree {
    constructor() {
        this.root = null;
    }

    /**
     * Возвращает высоту узла.
     *
     * @param {AVLNode} node узел
     * @return {number} высота или 0, если null
     */
    height(node) {
        return node === null ? 0 : node.getHeight();
    }

    /**
     * Вычисляет баланс-фактор узла (разность высот левого и правого поддеревьев).
     *
     * @param {AVLNode} node узел
     * @return {number} баланс-фактор
     */
    balanceFactor(node) {
        return this.height(node.getLeft()) - this.height(node.getRight());
    }

    /**
     * Обновляет высоту узла на основе высоты его дочерних поддеревьев.
     *
     * @param {AVLNode} node узел
     */
    updateHeight(node) {
        node.setHeight(1 + Math.max(this.height(node.getLeft()), this.height(node.getRight())));
    }

    /**
     * Выполняет правый поворот для восстановления баланса дерева.
     * Используется в случае левостороннего дисбаланса.
     *
     * @param {AVLNode} yNode Узел, у которого нарушен баланс
     * @return {AVLNode} Новый корень поддерева
     */
    rotateRight(yNode) {
        // TODO:
        //  1. Сохранить левое поддерево yNode
        //  2. Выполнить вращение: левое поддерево становится новым корнем, yNode становится правым потомком
        //  3. Обновить высоты узлов
        //  4. Вернуть новый корень поддерева
        throw new Error("method rotateRight(yNode) is not implemented yet");
    }

    /**
     * Выполняет левый поворот для восстановления баланса дерева.
     * Используется в случае правостороннего дисбаланса.
     *
     * @param {AVLNode} yNode Узел, у которого нарушен баланс
     * @return {AVLNode} Новый корень поддерева
     */
    rotateLeft(yNode) {
        // TODO:
        //  1. Сохранить правое поддерево yNode
        //  2. Выполнить вращение: правое поддерево становится новым корнем, yNode становится левым потомком
        //  3. Обновить высоты узлов
        //  4. Вернуть новый корень поддерева
        throw new Error("method rotateLeft(yNode) is not implemented yet");
    }

    /**
     * Выполняет двойной поворот влево-вправо (LR-rotation) при левом дисбалансе правого поддерева.
     *
     * @param {AVLNode} zNode Узел с нарушением баланса
     * @return {AVLNode} Новый корень сбалансированного поддерева
     */
    rotateLeftRight(zNode) {
        // TODO:
        //  1. Выполнить левый поворот для левого поддерева zNode
        //  2. Выполнить правый поворот для zNode
        //  3. Вернуть новый корень поддерева
        throw new Error("method rotateLeftRight(zNode) is not implemented yet");
    }

    /**
     * Выполняет двойной поворот вправо-влево (RL-rotation) при правом дисбалансе левого поддерева.
     *
     * @param {AVLNode} zNode Узел с нарушением баланса
     * @return {AVLNode} Новый корень сбалансированного поддерева
     */
    rotateRightLeft(zNode) {
        // TODO:
        //  1. Выполнить правый поворот для правого поддерева zNode
        //  2. Выполнить левый поворот для zNode
        //  3. Вернуть новый корень поддерева
        throw new Error("method rotateRightLeft(zNode) is not implemented yet");
    }

    /**
     * Выполняет ребалансировку дерева после вставки или удаления.
     *
     * @param {AVLNode} node узел
     * @return {AVLNode} сбалансированный узел
     */
    rebalance(node) {
        // TODO:
        //  1. Вычислить balanceFactor
        //  2. В зависимости от значения выполнить соответствующее вращение:
        //     > 1 и левый баланс >= 0 → rotateRight
        //     > 1 и левый баланс < 0  → rotateLeftRight
        //     < -1 и правый баланс <= 0 → rotateLeft
        //     < -1 и правый баланс > 0  → rotateRightLeft
        throw new Error("method rebalance(node) is not implemented yet");
    }

    /**
     * Рекурсивная вставка элемента с поддержанием балансировки.
     *
     * @param {AVLNode} current текущий узел
     * @param {number} value вставляемое значение
     * @return {AVLNode} корень поддерева
     */
    insertRecursively(current, value) {
        // TODO:
        //  1. Если узел null, создать новый узел
        //  2. Рекурсивно вставить значение в левое или правое поддерево
        //  3. Обновить высоту текущего узла
        //  4. Выполнить ребалансировку и вернуть новый корень поддерева
        throw new Error("method insertRecursively(current, value) is not implemented yet");
    }

    /**
     * Вставляет значение в дерево.
     *
     * @param {number} value значение для вставки
     */
    insert(value) {
        this.root = this.insertRecursively(this.root, value);
    }

    /**
     * Finds the node with minimum value in a subtree
     * @param {AVLNode} node - Root of the subtree
     * @returns {AVLNode} - Node with minimum value
     * @private
     */
    _min(node) {
        let current = node;
        while (current && current.left) {
          current = current.left;
        }
        return current;
    }

    /**
     * Finds the minimum value in the tree
     * @returns {*} - Minimum value
     * @throws {Error} - If tree is empty
     */
    min() {
        if (!this.root) throw new Error("Tree is empty");
        return this._min(this.root).value;
    }

    /**
     * Finds the maximum value in the tree
     * @returns {*} - Maximum value
     * @throws {Error} - If tree is empty
     */
    max() {
        if (!this.root) throw new Error("Tree is empty");

        let current = this.root;
        while (current && current.right) {
          current = current.right;
        }
        return current.value;
    }

    /**
     * Рекурсивное удаление с балансировкой.
     *
     * @param {AVLNode} node текущий узел
     * @param {number} value значение для удаления
     * @return {AVLNode} новый корень поддерева
     */
    removeRecursively(node, value) {
        // TODO:
        //  1. Если узел null, вернуть null
        //  2. Рекурсивно найти узел для удаления
        //  3. Обработать случаи:
        //     - Узел не найден → вернуть null
        //     - Узел с одним или без потомков → вернуть потомка или null
        //     - Узел с двумя потомками → найти преемника, заменить значение, удалить преемника
        //  4. Обновить высоту узла
        //  5. Выполнить ребалансировку и вернуть новый корень поддерева
        throw new Error("method removeRecursively(node, value) is not implemented yet");
    }

    /**
     * Удаляет значение из дерева, если оно есть.
    ~поставить лайк
     *
     * @param {number} value значение для удаления
     */
    remove(value) {
        this.root = this.removeRecursively(this.root, value);
    }

    /**
     * Поиск узла по значению.
     *
     * @param {AVLNode} node текущий узел
     * @param {number} value искомое значение
     * @return {AVLNode|null} найденный узел или null
     */
    searchRecursively(node, value) {
        // Базовый случай: узел не найден или найден узел с искомым значением
        if (!node) return null;
        if (value === node.value) return node;
      
        return value < node.value
            ? this.searchRecursively(node.left, value)
            : this.searchRecursively(node.right, value);
    }

    /**
     * Поиск узла по значению.
     *
     * @param {number} value значение
     * @return {AVLNode|null} найденный узел или null
     */
    search(value) {
        return this.searchRecursively(this.root, value);
    }

    /**
     * Проверяет, содержится ли значение в дереве.
     *
     * @param {number} value значение
     * @return {boolean} true, если найдено
     */
    contains(value) {
        return this.search(value) !== null;
    }

    /**
     * Подсчет количества узлов в дереве или поддереве.
     * @param {AVLNode} node корень дерева или поддерева
     * @return {number} количество узлов
     * @private
     */
    _countNodes(node) {
        if (node === null) return 0;
        return 1 + this._countNodes(node.left) + this._countNodes(node.right);
    }

    /**
     * Возвращает количество узлов в дереве.
     * @return {number}
     */
    size() {
        return this._countNodes(this.root);
    }

    /**
     * Проверяет, является ли дерево пустым.
     *
     * @return {boolean} true, если дерево пустое
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * @return {AVLNode}
     */
    getRoot() {
        return this.root;
    }

    /**
     * Проверяет, сбалансировано ли дерево
     * @returns {boolean} - true если дерево сбалансировано
     */
    isBalanced() {
        return this._checkBalance(this.root);
    }
    
    /**
     * Helper method to recursively check balance
     * @param {AVLNode|null} node - Current node
     * @returns {boolean} - True if subtree is balanced, false otherwise
     * @private
     */
    _checkBalance(node) {
        if (!node) return true;
    
        const balanceFactor = this.balanceFactor(node);
        
        return (
          Math.abs(balanceFactor) <= 1 &&
          this._checkBalance(node.left) &&
          this._checkBalance(node.right)
        );
    }

    /**
     * Тестовый запуск программы.
     */
    static main() {
        // Предполагается, что класс TreePrinter определен где-то еще
        const printer = new TreePrinter({
            getValue: node => `${node.getValue()} (${node.getHeight() - 1})`,
            getLeft: node => node.getLeft(),
            getRight: node => node.getRight()
        });

        const tree = new AvlTree();

        // Вставка значений в дерево от 1 до 12
        for (let i = 1; i <= 12; i++) {
            tree.insert(i);
        }

        // Вывод размера и визуализация дерева
        console.log(`Size = ${tree.size()}`);
        printer.printTree(tree.root);
    }
}

// Класс для визуализации дерева в консоли
/**
 * Улучшенный класс для визуализации дерева в консоли
 */
class TreePrinter {
    constructor(options = {}) {
        this.getValue = options.getValue || (node => String(node));
        this.getLeft = options.getLeft || (node => node.left);
        this.getRight = options.getRight || (node => node.right);
    }

    /**
     * Печатает AVL-дерево в удобочитаемом формате
     * @param {Object} root - Корень дерева
     */
    printTree(root) {
        if (root === null) {
            console.log("Empty tree");
            return;
        }

        const lines = [];
        this._printNodeInternal(root, "", true, lines);
        console.log(lines.join('\n'));
    }

    /**
     * Рекурсивно строит строковое представление дерева
     * @param {Object} node - Текущий узел
     * @param {string} prefix - Префикс для текущей строки
     * @param {boolean} isLast - Является ли узел последним потомком своего родителя
     * @param {string[]} lines - Массив строк для вывода
     * @private
     */
    _printNodeInternal(node, prefix, isLast, lines) {
        if (node === null) return;

        // Выбираем символы в зависимости от того, является ли узел последним потомком
        const nodeConnector = isLast ? "└── " : "├── ";
        lines.push(prefix + nodeConnector + this.getValue(node));

        // Подготавливаем префикс для детей
        const childPrefix = prefix + (isLast ? "    " : "│   ");

        // Получаем левого и правого потомка
        const left = this.getLeft(node);
        const right = this.getRight(node);

        // Рекурсивно обрабатываем потомков в порядке: правый (сверху), затем левый (снизу)
        // Это даст более интуитивное отображение дерева, где верхние элементы - больше, нижние - меньше
        if (right !== null) {
            const hasLeft = left !== null;
            this._printNodeInternal(right, childPrefix, !hasLeft, lines);
        }
        
        if (left !== null) {
            this._printNodeInternal(left, childPrefix, true, lines);
        }
    }
}

// Пример использования вместе с AVL-деревом
function testTreePrinter() {
    const tree = new AvlTree();
    
    // Вставка значений
    [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(value => {
        tree.insert(value);
    });
    
    // Создаем новый принтер
    const printer = new TreePrinter({
        getValue: node => `${node.getValue()} (h:${node.getHeight()})`,
        getLeft: node => node.getLeft(),
        getRight: node => node.getRight()
    });
    
    // Печатаем дерево
    console.log("Тестовое дерево:");
    printer.printTree(tree.getRoot());
    
    // Удаляем несколько узлов
    console.log("\nПосле удаления 4:");
    tree.remove(4);
    printer.printTree(tree.getRoot());
}

// Добавьте следующую строку в конец файла для тестирования
// testTreePrinter();
AvlTree.main();
// Для запуска в среде, где требуется модуль
module.exports = { AvlTree, AVLNode, TreePrinter };