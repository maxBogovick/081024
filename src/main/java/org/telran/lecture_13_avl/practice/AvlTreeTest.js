/**
 * Test suite for the AVL Tree implementation
 */
const { AvlTree } = require('./AvlTree');

/**
 * Runs a comprehensive test suite on the AVL Tree implementation
 */
function runTests() {
  let tree;

  /**
   * Initialize a fresh tree before each test
   */
  function beforeEach() {
    tree = new AvlTree();
  }

  /**
   * Assert that two values are equal
   * @param {*} actual - The actual value
   * @param {*} expected - The expected value
   * @param {string} message - Test description message
   */
  function assertEqual(actual, expected, message) {
    if (actual !== expected) {
      console.error(`❌ ${message} — Expected: ${expected}, Got: ${actual}`);
    } else {
      console.log(`✅ ${message}`);
    }
  }

  /**
   * Assert that a condition is true
   * @param {boolean} condition - The condition to test
   * @param {string} message - Test description message
   */
  function assertTrue(condition, message) {
    assertEqual(condition, true, message);
  }

  /**
   * Assert that a condition is false
   * @param {boolean} condition - The condition to test
   * @param {string} message - Test description message
   */
  function assertFalse(condition, message) {
    assertEqual(condition, false, message);
  }

  /**
   * Assert that a function throws an exception
   * @param {Function} fn - The function to test
   * @param {string} message - Test description message
   */
  function assertThrows(fn, message) {
    try {
      fn();
      console.error(`❌ ${message} — Expected exception, but none was thrown`);
    } catch {
      console.log(`✅ ${message}`);
    }
  }

  /**
   * Assert that a value is not null or undefined
   * @param {*} value - The value to test
   * @param {string} message - Test description message
   */
  function assertNotNull(value, message) {
    if (value === null || value === undefined) {
      console.error(`❌ ${message} — Value is null or undefined`);
    } else {
      console.log(`✅ ${message}`);
    }
  }

  // Tests for empty tree
  function testEmptyTree() {
    beforeEach();
    assertTrue(tree.isEmpty(), 'Tree should be empty');
    assertEqual(tree.size(), 0, 'Tree size should be 0');
    assertThrows(() => tree.min(), 'Calling min on empty tree should throw');
    assertThrows(() => tree.max(), 'Calling max on empty tree should throw');
    assertFalse(tree.contains(5), 'Tree should not contain 5');
    assertEqual(tree.search(5), null, 'Searching 5 in empty tree should return null');
  }

  // Test inserting a single node
  function testInsertSingleNode() {
    beforeEach();
    tree.insert(5);
    assertFalse(tree.isEmpty(), 'Tree should not be empty');
    assertEqual(tree.size(), 1, 'Tree size should be 1');
    assertEqual(tree.min(), 5, 'Min should be 5');
    assertEqual(tree.max(), 5, 'Max should be 5');
    assertTrue(tree.contains(5), 'Tree should contain 5');
    assertNotNull(tree.search(5), 'Searching 5 should return node');
    assertEqual(tree.search(5).value, 5, 'Value of found node should be 5');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test inserting multiple nodes
  function testInsertMultipleNodes() {
    beforeEach();
    [5, 3, 7, 2, 4, 6, 8].forEach(v => tree.insert(v));
    assertEqual(tree.size(), 7, 'Tree size should be 7');
    assertEqual(tree.min(), 2, 'Min should be 2');
    assertEqual(tree.max(), 8, 'Max should be 8');
    assertTrue(tree.contains(3), 'Tree should contain 3');
    assertTrue(tree.contains(7), 'Tree should contain 7');
    assertFalse(tree.contains(1), 'Tree should not contain 1');
    assertFalse(tree.contains(9), 'Tree should not contain 9');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test inserting duplicate values
  function testInsertDuplicates() {
    beforeEach();
    tree.insert(5);
    tree.insert(5);
    tree.insert(5);
    assertEqual(tree.size(), 1, 'Duplicate inserts should not increase size');
    assertEqual(tree.min(), 5, 'Min should be 5');
    assertEqual(tree.max(), 5, 'Max should be 5');
  }

  // Test left rotation (right-heavy tree)
  function testLeftRotation() {
    beforeEach();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    const root = tree.getRoot();
    assertEqual(root.value, 20, 'Root should be 20 after left rotation');
    assertEqual(root.left.value, 10, 'Left child should be 10');
    assertEqual(root.right.value, 30, 'Right child should be 30');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test right rotation (left-heavy tree)
  function testRightRotation() {
    beforeEach();
    tree.insert(30);
    tree.insert(20);
    tree.insert(10);

    const root = tree.getRoot();
    assertEqual(root.value, 20, 'Root should be 20 after right rotation');
    assertEqual(root.left.value, 10, 'Left child should be 10');
    assertEqual(root.right.value, 30, 'Right child should be 30');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test left-right rotation
  function testLeftRightRotation() {
    beforeEach();
    tree.insert(30);
    tree.insert(10);
    tree.insert(20);

    const root = tree.getRoot();
    assertEqual(root.value, 20, 'Root should be 20 after left-right rotation');
    assertEqual(root.left.value, 10, 'Left child should be 10');
    assertEqual(root.right.value, 30, 'Right child should be 30');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test right-left rotation
  function testRightLeftRotation() {
    beforeEach();
    tree.insert(10);
    tree.insert(30);
    tree.insert(20);

    const root = tree.getRoot();
    assertEqual(root.value, 20, 'Root should be 20 after right-left rotation');
    assertEqual(root.left.value, 10, 'Left child should be 10');
    assertEqual(root.right.value, 30, 'Right child should be 30');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test removing a single node
  function testRemoveSingleNode() {
    beforeEach();
    tree.insert(5);
    tree.remove(5);
    assertTrue(tree.isEmpty(), 'Tree should be empty after removal');
    assertEqual(tree.size(), 0, 'Tree size should be 0 after removal');
    assertFalse(tree.contains(5), 'Tree should not contain 5 after removal');
  }

  // Test removing a node that doesn't exist
  function testRemoveNonExistentNode() {
    beforeEach();
    tree.insert(5);
    tree.remove(10);
    assertEqual(tree.size(), 1, 'Size should not change after removing non-existent node');
    assertTrue(tree.contains(5), 'Tree should still contain 5');
  }

  // Test removing a leaf node
  function testRemoveLeafNode() {
    beforeEach();
    [20, 10, 30, 5].forEach(v => tree.insert(v));
    tree.remove(5);
    assertEqual(tree.size(), 3, 'Tree size should be 3 after removing leaf');
    assertFalse(tree.contains(5), 'Tree should not contain 5');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test removing a node with one child
  function testRemoveNodeWithOneChild() {
    beforeEach();
    [20, 10, 30, 5].forEach(v => tree.insert(v));
    tree.remove(10);
    assertEqual(tree.size(), 3, 'Tree size should be 3 after removing node with one child');
    assertFalse(tree.contains(10), 'Tree should not contain 10');
    assertTrue(tree.contains(5), 'Tree should contain 5');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test removing a node with two children
  function testRemoveNodeWithTwoChildren() {
    beforeEach();
    [20, 10, 30, 5, 15].forEach(v => tree.insert(v));
    tree.remove(10);
    assertEqual(tree.size(), 4, 'Tree size should be 4 after removing node with two children');
    assertFalse(tree.contains(10), 'Tree should not contain 10');
    console.log(JSON.stringify(tree));
    assertTrue(tree.contains(5), 'Tree should contain 5');
    assertTrue(tree.contains(15), 'Tree should contain 15');
    assertTrue(tree.isBalanced(), 'Tree should be balanced');
  }

  // Test complex imbalanced tree insertion
  function testComplexTreeInsertion() {
    beforeEach();
    // Insert values that require multiple rotations
    [50, 25, 75, 10, 30, 60, 80, 5, 15, 27, 35, 55, 65, 77, 85].forEach(v => tree.insert(v));
    
    assertTrue(tree.isBalanced(), 'Complex tree should be balanced after insertion');
    assertEqual(tree.size(), 15, 'Complex tree should have 15 nodes');
    assertEqual(tree.min(), 5, 'Min should be 5');
    assertEqual(tree.max(), 85, 'Max should be 85');
  }

  // Test complex tree removal
  function testComplexTreeRemoval() {
    beforeEach();
    // Insert values that require multiple rotations
    [50, 25, 75, 10, 30, 60, 80, 5, 15, 27, 35, 55, 65, 77, 85].forEach(v => tree.insert(v));
    
    // Remove some nodes to cause rebalancing
    tree.remove(25);
    tree.remove(75);
    tree.remove(50);
    
    assertTrue(tree.isBalanced(), 'Complex tree should remain balanced after removals');
    assertEqual(tree.size(), 12, 'Complex tree should have 12 nodes after removal');
    assertFalse(tree.contains(25), 'Tree should not contain 25');
    assertFalse(tree.contains(75), 'Tree should not contain 75');
    assertFalse(tree.contains(50), 'Tree should not contain 50');
  }

  // Run all tests
  const tests = [
    testEmptyTree,
    testInsertSingleNode,
    testInsertMultipleNodes,
    testInsertDuplicates,
    testLeftRotation,
    testRightRotation,
    testLeftRightRotation,
    testRightLeftRotation,
    testRemoveSingleNode,
    testRemoveNonExistentNode,
    testRemoveLeafNode,
    testRemoveNodeWithOneChild,
    testRemoveNodeWithTwoChildren,
    testComplexTreeInsertion,
    testComplexTreeRemoval
  ];

  console.log('\nRunning AVL Tree tests:\n');
  tests.forEach(testFn => {
    try {
      console.log(`Running test: ${testFn.name}`);
      testFn();
      console.log('');
    } catch (err) {
      console.error(`❌ Error during test ${testFn.name}: ${err.message}`);
      console.error(err.stack);
      console.log('');
    }
  });

  console.log('All tests completed.');
}

runTests();