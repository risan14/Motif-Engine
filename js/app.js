const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function getValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function populateContent() {
  $$("[data-content]").forEach(el => {
    const value = getValue(SITE_CONTENT, el.dataset.content);
    if (value !== undefined) el.textContent = value;
  });

  $$("[data-html]").forEach(el => {
    const value = getValue(SITE_CONTENT, el.dataset.html);
    if (value !== undefined) el.innerHTML = value;
  });

  document.title = `${SITE_CONTENT.brand.name} — ${SITE_CONTENT.brand.role}`;
  $("#heroImage").src = SITE_CONTENT.hero.image;
  $("#heroImage").alt = SITE_CONTENT.brand.name;

  const email = SITE_CONTENT.contact.email;
  $("#contactEmail").textContent = email;
  $("#contactEmail").href = `mailto:${email}`;
}

function renderMarquee() {
  const items = [...SITE_CONTENT.marquee, ...SITE_CONTENT.marquee];
  $("#marqueeTrack").innerHTML = items.map(item => `<span>${item}<b>✦</b></span>`).join("");
}

function renderStats() {
  $("#stats").innerHTML = SITE_CONTENT.about.stats.map(stat => `
    <div class="stat">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </div>
  `).join("");
}

function renderServices() {
  $("#servicesGrid").innerHTML = SITE_CONTENT.services.map(service => `
    <article class="service-card">
      <div class="service-top">
        <span>${service.number}</span>
        <span>↗</span>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <ul>${service.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderProcess() {
  $("#processGrid").innerHTML = SITE_CONTENT.process.map(step => `
    <article class="process-step">
      <span>${step.number}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>
  `).join("");
}

let activeFilter = "All";

function renderFilters() {
  const categories = ["All", ...new Set(SITE_CONTENT.projects.flatMap(p => p.categories).filter(c => c !== "All"))];
  $("#filterBar").innerHTML = categories.map(category => `
    <button class="${category === activeFilter ? "active" : ""}" data-filter="${category}">${category}</button>
  `).join("");

  $$("#filterBar button").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const projects = SITE_CONTENT.projects.filter(project =>
    activeFilter === "All" || project.categories.includes(activeFilter)
  );

  $("#projectsGrid").innerHTML = projects.map((project, index) => `
    <article class="project-card ${index === 0 ? "featured" : ""}" data-project="${project.id}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-arrow">↗</span>
      </div>
      <div class="project-meta">
        <div>
          <h3>${project.title}</h3>
          <p>${project.category} · ${project.year}</p>
        </div>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  `).join("");

  $$(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(card.dataset.project));
  });
}

function openProject(id) {
  const project = SITE_CONTENT.projects.find(p => p.id === id);
  if (!project) return;

  $("#modalImage").src = project.image;
  $("#modalImage").alt = project.title;
  $("#modalCategory").textContent = `${project.category} · ${project.year}`;
  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalDetails").innerHTML = project.details.map(d => `<span>${d}</span>`).join("");
  $("#modalLink").href = project.link || "#";

  $("#projectModal").classList.add("open");
  $("#projectModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  $("#projectModal").classList.remove("open");
  $("#projectModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initMenu() {
  $("#menuBtn").addEventListener("click", () => {
    $("#nav").classList.toggle("open");
    $("#menuBtn").classList.toggle("open");
  });

  $$(".nav a").forEach(link => link.addEventListener("click", () => {
    $("#nav").classList.remove("open");
    $("#menuBtn").classList.remove("open");
  }));
}

function initHeader() {
  window.addEventListener("scroll", () => {
    $("#header").classList.toggle("scrolled", window.scrollY > 30);
  });
}

function initModal() {
  $("#modalClose").addEventListener("click", closeProject);
  $("#projectModal").addEventListener("click", e => {
    if (e.target === $("#projectModal")) closeProject();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeProject();
  });
}

function init() {
  populateContent();
  renderMarquee();
  renderStats();
  renderServices();
  renderProcess();
  renderFilters();
  renderProjects();
  initMenu();
  initHeader();
  initModal();

  window.addEventListener("load", () => {
    setTimeout(() => $("#siteLoader").classList.add("hidden"), 350);
  });
}

init();