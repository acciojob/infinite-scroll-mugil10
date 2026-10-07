
const list = document.getElementById("infi-list");

let count = 1;

// Function to add list items
function addItems(number) {
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");

    li.textContent = "Item " + count;

    list.appendChild(li);

    count++;
  }
}

// Add 10 items by default
addItems(10);

// Add 2 more items when user reaches the bottom
window.addEventListener("scroll", function() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight) {
    addItems(2);
  }
});