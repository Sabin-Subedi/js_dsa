import LinkedList from "../liner_data_structures/linked_list.js";
import Node from "../Node.js";

class HashMaps {
  constructor(size = 0) {
    this.hashmaps = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i in key) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmaps.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmaps[arrayIndex];
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let currentNode = linkedList.head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        currentNode.data = { key, value };
        break;
      }

      if (currentNode.getNextNode() === null) {
        const newNode = new Node({ key, value });
        currentNode.setNextNode(newNode);
      }

      currentNode = currentNode.getNextNode();
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmaps[arrayIndex];
    let currentNode = linkedList.head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
