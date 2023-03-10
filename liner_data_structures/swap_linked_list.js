import LinkedList from "./linked_list.js";

const season = new LinkedList();
season.addToHead("summer");
season.addToHead("winter");
season.addToTail("fall");
season.addToTail("spring");
season.removeHead();
console.log(
  "Linked List:\n ouptut = <head> -> summer  -> fall  -> spring <tail>"
);
season.printList();
swapNodes(season, "fall", "spring");
season.printList();

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} <-> ${data2}`);
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  // finding a previous node2
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  // finding previous node2
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}
