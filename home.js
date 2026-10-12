(function () {
  /* ---- Slider ---- */
  const slider = document.getElementById("slider");
  slider.innerHTML = `<div class="slides">${SLIDES.map(s => `
    <div class="slide" style="background-image:url('${s.image}')">
      <div class="slide-text"><h2>${s.title}</h2><p>${s.text}</p>
      <a class="btn" href="${s.link}">${s.button}</a></div>
    </div>`).join("")}</div>
    <button class="arrow prev" aria-label="Previous">‹</button>
    <button class="arrow next" aria-label="Next">›</button>
    <div class="dots">${SLIDES.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join("")}</div>`;

  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dots button");
  let cur = 0, timer;

  function show(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === cur));
    dots.forEach((d, k) => d.classList.toggle("on", k === cur));
  }
  function start() { stop(); timer = setInterval(() => show(cur + 1), SITE.slideInterval); }
  function stop() { clearInterval(timer); }

  slider.querySelector(".prev").onclick = () => { show(cur - 1); start(); };
  slider.querySelector(".next").onclick = () => { show(cur + 1); start(); };
  dots.forEach((d, i) => d.onclick = () => { show(i); start(); });
  slider.onmouseenter = stop; slider.onmouseleave = start;
  show(0); start();

  /* ---- Grids ---- */
  const card = p => `<a class="card" href="${p.link}"><img src="${p.image}" alt="${p.name}"><span>${p.name}</span></a>`;
  document.getElementById("categories").innerHTML = CATEGORIES.map(card).join("");
  document.getElementById("best").innerHTML = BEST_SELLING.map(card).join("");
})();
