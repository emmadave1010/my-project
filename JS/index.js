const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const statNumbers = document.querySelectorAll(".stats-bar .num");

statNumbers.forEach((num) => {
  const target = parseInt(num.textContent);
  let count = 0;
  const step = target / 50;

  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    num.textContent = Math.round(count) + "+";
  }, 80);
});

const filterButtons = document.querySelectorAll(".projects-button button");
const projectCards = document.querySelectorAll(
  ".projects-pictures .project-card",
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.textContent.trim().toLowerCase();

    filterButtons.forEach((b) => (b.className = "btn-button"));
    button.className = "btn-button1";

    projectCards.forEach((card) => {
      const category = card
        .querySelector(".project-label")
        .textContent.trim()
        .toLowerCase();
      const show = filter === "all projects" || filter === category;
      card.style.display = show ? "" : "none";
    });
  });
});
