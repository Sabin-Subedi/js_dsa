import LinkedList from "./linked_list.js";

const numbers = new LinkedList();

for (let i = 0; i < 5; i++) {
  numbers.addToTail(i);
}
numbers.printList();

const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;

  while (tailSeeker !== null) {
    tailSeeker = tailSeeker.getNextNode();
    if (count >= n) {
      if (!current) {
        current = linkedlist.head;
      }
      current = current.getNextNode();
    }
    count++;
  }

  return current;
};

const findMiddle = (linkedList) => {
  let firstPointer = linkedList.head;
  let secondPointer = linkedList.head;

  while (firstPointer) {
    firstPointer = firstPointer.getNextNode();
    if (firstPointer) {
      firstPointer = firstPointer.getNextNode();
      secondPointer = secondPointer.getNextNode();
    }
  }

  return secondPointer;
};

const findMiddleAlternate = (linkedList) => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
};

console.log(findMiddle(numbers));
console.log(findMiddleAlternate(numbers));
