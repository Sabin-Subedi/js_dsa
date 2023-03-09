import LinkedList from "./liner_data_structures/linked_list.js";

// use case of linked list
const season = new LinkedList();
season.addToHead("summer");
season.addToHead("winter");
season.addToTail("fall");
season.addToTail("spring");
season.removeHead();
console.log(
  "Linked List: ouptut = <head> -> summer  -> fall  -> spring <tail>"
);
season.printList();
/*
Output:
<head> -> summer  -> fall  -> spring <tail>
*/
