/* Menu Show Y Hidden */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show */
/**validate constants if they exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hidden */
/**Validate constants if they exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/**Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When we click on any nav-link class, the show-menu class is removed
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/**Accordion for Skills */
const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }

  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open ";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/**Qualification Tabs */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    //Remove qualification-active class from whatever element it was added
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    //add qualification-active class to target element(Makes the toggle between tabs work)
    target.classList.add("qualification-active");

    // Remove tab_active class from the active tab element
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    tab.classList.add("tab-active");
  });
});

/*==============Service Modal============== */
const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==============Portfolio Swiper============== */
var swiperPortfolio = new Swiper(".portfolio-container ", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==============Testimonial Swiper============== */
var swiperTestimonial = new Swiper(".testimonial-container ", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakPoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
