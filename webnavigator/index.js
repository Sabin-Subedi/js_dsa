import Stack from "../liner_data_structures/stack.js";
import p from "prompt-sync";
const prompt = p();

// --------------------
// Initialization
// --------------------

let currentPage = "Start Page";
let backPages = new Stack();
let nextPages = new Stack();
let finish = false;
let showBack = false;
let showNext = false;

// --------------------
// Helper Functions
// --------------------

function showCurrentPage(action) {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log("Back page = ", backPages.peek());
  console.log("Next page = ", nextPages.peek());
}

function newPage(page) {
  backPages.push(currentPage);
  currentPage = page;
  // clear the nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("NEW: ");
}

function backPage() {
  if (!backPages.isEmpty()) {
    nextPages.push(currentPage);
    currentPage = backPages.pop();
    showCurrentPage("BACK: ");
  } else {
    console.log("No back page left to navigate");
  }
}

function nextPage() {
  if (!nextPages.isEmpty()) {
    backPages.push(currentPage);
    currentPage = nextPages.pop();
    showCurrentPage("NEXT: ");
  } else {
    console.log("No front page to navigate");
  }
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// -----------------------------------
// User Interface Part1
// -----------------------------------
showCurrentPage("DEFAULT: ");
while (finish === false) {
  let instructions = baseInfo;
  if (!backPages.isEmpty()) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (!nextPages.isEmpty()) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();

  if (lowerCaseAnswer === "n") {
    if (!showNext) {
      console.log("Cannot go to the next page. Stack is empty.");
      continue;
    }
    nextPage();
  } else if (lowerCaseAnswer === "b") {
    if (!showBack) {
      console.log("Cannot go to the next page. Stack is empty.");
      continue;
    }
    backPage();
  } else if (lowerCaseAnswer === "q") {
    finish = true;
  } else {
    newPage(lowerCaseAnswer);
  }
}

// -----------------------------------
// User Interface Part2
// -----------------------------------
