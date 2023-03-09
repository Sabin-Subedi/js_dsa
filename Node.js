class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node) {
      this.next = node;
    } else {
      throw Error("Next node must me an instance of a Node class. ");
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node) {
      this.previous = node;
    } else {
      throw Error("Next node must me an instance of a Node class. ");
    }
  }

  getNextNode(node) {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

export default Node;
