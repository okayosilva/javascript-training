const selectedLinks = document.querySelectorAll(".menu a");
const selectedAllElements = document.body.querySelectorAll("*");

function handleLink(event) {
  event.preventDefault();

  selectedLinks.forEach((link) => {
    if (link !== event.target) {
      link.classList.remove("active");
    }
  });

  event.target.classList.toggle("active");
}

selectedLinks.forEach((link) => {
  link.addEventListener("click", handleLink);
});

function handleElementClick(event) {
  event.preventDefault();
  console.log(event.currentTarget);
}

function handleRemoveElementClick(event) {
  event.preventDefault();
  event.target.remove();
}

selectedAllElements.forEach((element) => {
  element.addEventListener("click", handleElementClick);
});

function plusFontSize(element) {
  let currentFontSize = parseFloat(
    window.getComputedStyle(element).fontSize.replace("px", "")
  );

  element.style.fontSize = `${currentFontSize + 4}px`;
}

function decrementFontSize(element) {
  let currentFontSize = parseFloat(
    window.getComputedStyle(element).fontSize.replace("px", "")
  );

  element.style.fontSize = `${currentFontSize - 4}px`;
}

function handleEditFont(event) {
  if (event.key === "t") {
    return plusFontSize(document.body);
  }

  if (event.key === "d") {
    return decrementFontSize(document.body);
  }
}

window.addEventListener("keydown", handleEditFont);
