function initTabNav() {
  const tabList = document.querySelectorAll(".js-tab-animais li");
  const tabContent = document.querySelectorAll(".js-tab-content section");

  if (tabList.length && tabContent.length) {
    tabContent[0].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });

      tabContent[index].classList.add("active");
    }

    tabList.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  function activePrimaryAccordion() {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");
  }

  if (accordionList.length) {
    activePrimaryAccordion();

    function activeAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

function initScrollBehavior() {
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollBehavior();
initTabNav();
initAccordion();
