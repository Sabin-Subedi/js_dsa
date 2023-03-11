import LinkedList from "./linked_list.js";

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  hasRoom() {
    return Boolean(this.size < this.maxSize);
  }
  isEmpty() {
    return Boolean(this.size === 0);
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    } else {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stack.head.data;
    }
  }
}

export default Stack;
