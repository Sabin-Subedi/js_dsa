import Node from "../Node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const currentHead = this.head;
    const newHead = new Node(data);
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let currentHead = this.head;
    const newNode = new Node(data);
    if (!currentHead) {
      this.head = newNode;
    } else {
      while (currentHead.getNextNode() !== null) {
        currentHead = currentHead.getNextNode();
      }
      currentHead.setNextNode(newNode);
    }
  }

  printList() {
    let output = "<head> -> ";
    let currentHead = this.head;
    while (currentHead !== null) {
      output += ` -> ${currentHead.data} `;
      currentHead = currentHead.getNextNode();
    }
    output += "<tail>";
  }
}

export default LinkedList;
