import Node from "../Node.js";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const currentHead = this.head;
    const newHead = new Node(data);
    if (currentHead) {
      this.head.setNextNode(currentHead);
      currentHead.setPreviousNode(this.head);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const currentTail = this.tail;
    const newTail = new Node(data);
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }

    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (this.tail === removedHead) {
      this.tail = this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }

    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (this.tail === removedTail) {
      this.tail = this.removeHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
      }
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();

      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let output = "<head>";
    let currentHead = this.head;
    while (currentHead !== null) {
      output += ` -> ${currentHead.data} `;
      currentHead = currentHead.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}
