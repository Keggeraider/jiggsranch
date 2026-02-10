(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  requestAnimationFrame(() => hero.classList.add("is-visible"));
})();
