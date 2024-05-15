const firstImage = document.querySelector(".animais-lista img");
const imageToTop = firstImage.getBoundingClientRect().top;

const selectAllImages = document.querySelectorAll("img");

function sumImagesWidth() {
  let imageWidth = 0;
  selectAllImages.forEach((image) => {
    imageWidth += image.offsetWidth;
  });

  console.log(imageWidth);
}

const validationDimensionsLinks = document.querySelectorAll("a[href]");

function validationDimensions() {
  validationDimensionsLinks.forEach((link) => {
    let linkWith = link.getBoundingClientRect().width;
    let linkHeight = link.getBoundingClientRect().height;

    if (linkWith >= 48 && linkHeight >= 48) {
      return console.log(link, "Possui boa acessibilidade");
    }
    return console.log(link, "Não possui boa acessibilidade");
  });
}

const windowWidth = window.matchMedia("(max-width: 720px)").matches;
const menuSelected = document.querySelector(".menu");

function responsiveApplication() {
  if (windowWidth) {
    menuSelected.classList.add("menu-mobile");
  } else {
    menuSelected.classList.add("menu-desktop");
  }
}

window.onload = function () {
  sumImagesWidth();
  validationDimensions();
  responsiveApplication();
};
