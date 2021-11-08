
// If you use a <button> tag you can query the button directly. Otherwise, you can use a CSS class on the element you click, and querySelector that class.
let button = document.querySelector(".button");
let container = document.querySelector(".container");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "But wait, theres more ";
  wrapper.appendChild(newItem);
});