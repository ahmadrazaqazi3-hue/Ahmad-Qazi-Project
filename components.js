/* Header aur Footer yahan ek hi baar likhe hain -
   har page par apne aap same nazar aayenge. */
(function () {
  const header = `
  <div class="notice">${SITE.notice}</div>
  <header class="topbar">
    <div class="wrap topbar-in">
      <a class="brand" href="index.html"><img src="${SITE.logo}" alt=""><span>${SITE.name}</span></a>
      <div class="info">
        <span>📍 ${SITE.branch}</span>
        <span>🕘 ${SITE.timing}</span>
        <span>📞 ${SITE.phone}</span>
      </div>
      <div class="actions">
        <a href="#">Login / Register</a>
        <a class="cart" href="#">Cart / Rs 0</a>
      </div>
      <button class="burger" aria-label="Menu" id="burger">☰</button>
    </div>
    <nav class="nav" id="nav"><div class="wrap">
      ${NAV.map(n => `<a href="${n.link}">${n.text}</a>`).join("")}
    </div></nav>
  </header>`;

  const footer = `
  <footer class="footer"><div class="wrap foot-grid">
    <div><div class="brand light"><img src="${SITE.logo}" alt=""><span>${SITE.name}</span></div><p>${SITE.about}</p></div>
    <div><h4>Contact</h4>
      <p>WhatsApp: ${SITE.whatsapp}</p><p>${SITE.email}</p><p>${SITE.address}</p></div>
    <div><h4>Pages</h4>${FOOTER_PAGES.map(p => `<a href="${p.link}">${p.text}</a>`).join("")}</div>
    <div><h4>Courier Partners</h4>${COURIERS.map(c => `<span class="courier">${c}</span>`).join("")}</div>
  </div>
  <div class="copy">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</div></footer>`;

  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;
  document.title = document.title.replace("{name}", SITE.name);
  document.getElementById("burger").onclick = () => document.getElementById("nav").classList.toggle("open");
})();
