document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const opened = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.classList.toggle("is-open", opened);
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
  const filters = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll(".project-item");
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projects.forEach(project => {
      project.hidden = filter !== "all" && project.dataset.category !== filter;
    });
  }));
});