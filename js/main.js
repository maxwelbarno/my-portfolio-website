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
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When we click on any nav_link class, the show-menu class is removed
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/**Accordion for Skills */
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }

  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open ";
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

    //Remove qualification_active class from whatever element it was added
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });

    //add qualification_active class to target element(Makes the toggle between tabs work)
    target.classList.add("qualification_active");

    // Remove tab_active class from the active tab element
    tabs.forEach((tab) => {
      tab.classList.remove("tab_active");
    });

    tab.classList.add("tab_active");
  });
});
