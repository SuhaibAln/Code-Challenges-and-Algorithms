// Write your test here
const { Node, Tree, sumTree } = require("./challenge01");

describe("sumTree", () => {
  it("should return true if two numbers in the tree add up to the target", () => {
    const tree = new Tree();
    tree.add(7);
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    tree.add(14);
    expect(sumTree(tree, 3)).toBe(true);
  });

  it("should return true if two numbers in the tree add up to the target", () => {
    const tree = new Tree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    tree.add(8);
    tree.add(9);
    expect(sumTree(tree, 10)).toBe(true);
  });

  it("should return false if no two numbers in the tree add up to the target", () => {
    const tree = new Tree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    tree.add(8);
    tree.add(9);
    expect(sumTree(tree, 20)).toBe(false);
  });
});
