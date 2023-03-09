import DoublyLinkedList from "./liner_data_structures/doubly_linked_list.js";
import LinkedList from "./liner_data_structures/linked_list.js";

// use case of linked list
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
/*
Output:
<head> -> summer  -> fall  -> spring <tail>
*/

// use case of doubly linked list
const subway = new DoublyLinkedList();
subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.removeHead();
subway.removeTail();
// subway.removeByData("TimesSquare");
subway.removeByData("TimesSquare");
console.log(
  "\n\nDoubly Linked List: \nouptut = <head> -> GrandCentral  -> PennStation  -> WallStreet <tail> "
);
subway.printList();

/*
Output:
<head> -> summer  -> fall  -> spring <tail>
*/
