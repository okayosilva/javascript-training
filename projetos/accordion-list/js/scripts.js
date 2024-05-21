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

initTabNav();
initAccordion();
