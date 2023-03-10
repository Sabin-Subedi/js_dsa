import LinkedList from "./linked_list.js";

class Queue {
  constructor(maxSize = Infinity) {
    this.maxSize = maxSize;
    this.size = 0;
    this.queue = new LinkedList();
  }

  hasRoom() {
    return Boolean(this.size < this.maxSize);
  }

  isEmpty() {
    return Boolean(this.size === 0);
  }

  enqueue(data) {
    if (!this.hasRoom()) {
      throw new Error("Queue is full");
    }
    this.queue.addToTail(data);
    this.size++;
    console.log(
      `Enqueued ${data} into the queue. Current Queue Size: ${this.size}`
    );
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const data = this.queue.removeHead();

    this.size--;

    console.log(
      `Dequeued ${data} from the queue. Current Queue Size: ${this.size}`
    );
  }
}


export default Queue