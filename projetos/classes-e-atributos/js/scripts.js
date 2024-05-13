const selectMenu = document.querySelectorAll(".menu li");
const selectMenuLink = document.querySelectorAll("a[href^='http']");

selectMenu.forEach((link) => link.classList.add("ativo"));
selectMenu.forEach((link) => link.classList.remove("ativo"));

selectMenu[0].classList.add("ativo");

const img = document.querySelectorAll("img");

img.forEach((img) => {
  const hasAttribute = img.hasAttribute("alt");
  console.log(hasAttribute);
});

selectMenuLink.forEach((link) =>
  link.setAttribute("href", "https://www.google.com")
);
