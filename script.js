
const list = document.getElementById("list");

let count = 1;

// Function to add list items
function addItems(numberOfItems) {
  for (let i = 0; i < numberOfItems; i++) {
    const li = document.createElement("li");

    li.textContent = "Item " + count;

    list.appendChild(li);

    count++;
  }
}

// Add 10 items initially
addItems(10);

// Detect when user reaches the end of the list
window.addEventListener("scroll", function() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 5) {
    addItems(2);
  }
});
