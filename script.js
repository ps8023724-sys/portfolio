const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const skillContent = {
  web: {
    label: "WEB FOUNDATIONS",
    description: "Building structured pages, styling responsive layouts, and adding interactive behavior to the browser.",
    chips: ["HTML5", "CSS3", "Responsive layouts", "JavaScript", "DOM manipulation"]
  },
  logic: {
    label: "PROGRAMMING & DATA",
    description: "Practicing problem-solving with JavaScript and learning how web applications request, receive, and display data.",
    chips: ["JavaScript", "Fetch API", "JSON", "Async requests", "Basic debugging"]
  },
  workflow: {
    label: "WORKFLOW & QUALITY",
    description: "Learning to manage versions carefully and evaluate websites for accessibility, usability, and performance.",
    chips: ["Git", "GitHub", "GitHub Pages", "Lighthouse", "Accessibility", "Performance"]
  }
};

const skillTabs = document.querySelectorAll(".skill-tab");
const skillLabel = document.querySelector("#skill-panel-label");
const skillDescription = document.querySelector("#skill-description");
const skillChips = document.querySelector("#skill-chips");

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const content = skillContent[tab.dataset.skill];
    if (!content) return;
    skillTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    skillLabel.textContent = content.label;
    skillDescription.textContent = content.description;
    skillChips.replaceChildren(...content.chips.map((name) => {
      const chip = document.createElement("span");
      chip.textContent = name;
      return chip;
    }));
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
