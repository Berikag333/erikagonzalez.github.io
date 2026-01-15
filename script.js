document.getElementById("year").textContent = new Date().getFullYear();

(function () {
  const LINKS = {
    github: "https://github.com/Berikag333",
    linkedin: "https://www.linkedin.com/in/erikabgonzalezmuñoz/",
    notion: "https://www.notion.so/Erika-Gonzalez-Marketing-Data-Analytics-2e87a17fbe4880cda3b4cd38efefba24",
    email: "mailto:berikag333@gmail.com",
    tableau: "https://public.tableau.com/app/profile/erika.gonzalez7036/vizzes",
  };

  function socialHTML(extraClass = "") {
    return `
      <div class="social ${extraClass}">
        <a href="${LINKS.github}" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="${LINKS.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="${LINKS.notion}" target="_blank" rel="noreferrer" aria-label="Notion">
          <i class="fa-brands fa-notion"></i>
        </a>
        <a href="${LINKS.tableau}" target="_blank" rel="noreferrer" aria-label="Tableau">
          <i class="fa-solid fa-chart-line"></i>
        </a>
        <a href="${LINKS.email}" aria-label="Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    `;
  }

  const top = document.getElementById("social-top");
  if (top) top.innerHTML = socialHTML("social-top");

  const footer = document.getElementById("social-footer");
  if (footer) footer.innerHTML = socialHTML("social-footer");
})();
