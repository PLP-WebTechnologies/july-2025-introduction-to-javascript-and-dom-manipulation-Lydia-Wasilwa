// ==============================
// Part 1: JavaScript Basics
// ==============================
let usernameInput = document.getElementById("username");
let greetBtn = document.getElementById("greetBtn");
let greetingOutput = document.getElementById("greeting");

// Event: Greeting user with condition
greetBtn.addEventListener("click", function() {
  let name = usernameInput.value;
  if (name) {
    greetingOutput.textContent = "Hello, " + name + "! 👋";
  } else {
    greetingOutput.textContent = "Please enter your name.";
  }
});

// ==============================
// Part 2: Functions
// ==============================

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Format string
function formatMessage(msg) {
  return "✨ " + msg.toUpperCase() + " ✨";
}

let calcBtn = document.getElementById("calcBtn");
let calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (!isNaN(num1) && !isNaN(num2)) {
    let total = addNumbers(num1, num2);
    calcResult.textContent = formatMessage("The total is " + total);
  } else {
    calcResult.textContent = "Please enter valid numbers.";
  }
});

// ==============================
// Part 3: Loops
// ==============================

// Example 1: Countdown using for loop
let countdownBtn = document.getElementById("countdownBtn");
let countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", function() {
  countdownList.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }
});

// Example 2: Iterate through array with forEach
let fruits = ["Apple", "Banana", "Grapes", "Orange"];
let listBtn = document.getElementById("listBtn");
let fruitsList = document.getElementById("fruitsList");

listBtn.addEventListener("click", function() {
  fruitsList.innerHTML = "";
  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitsList.appendChild(li);
  });
});

// ==============================
// Part 4: DOM Manipulation
// ==============================
let toggleBtn = document.getElementById("toggleBtn");
let secretMsg = document.getElementById("secretMsg");

toggleBtn.addEventListener("click", function() {
  secretMsg.classList.toggle("hidden");
});

// Add items dynamically
let addItemBtn = document.getElementById("addItemBtn");
let dynamicList = document.getElementById("dynamicList");
let counter = 1;

addItemBtn.addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "Item " + counter++;
  dynamicList.appendChild(li);
});
