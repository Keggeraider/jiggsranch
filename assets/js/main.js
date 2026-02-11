(function () {
  const hero = document.querySelector(".c-hero");
  if (!hero) return;
  requestAnimationFrame(() => hero.classList.add("is-visible"));
})();
