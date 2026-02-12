(function () {
  const dialog = document.getElementById("love-lightbox");
  if (!dialog) return;

  const openers = Array.from(document.querySelectorAll(".c-card__media-btn"));
  const closeButtons = Array.from(dialog.querySelectorAll("[data-lightbox-close]"));
  const prevButton = dialog.querySelector("[data-lightbox-prev]");
  const nextButton = dialog.querySelector("[data-lightbox-next]");
  const imageWrap = dialog.querySelector(".c-lightbox__figure");
  const imageEl = document.getElementById("love-lightbox-image");
  const placeholderEl = document.getElementById("love-lightbox-placeholder");
  const captionEl = document.getElementById("love-lightbox-caption");

  if (!imageWrap || !imageEl || !placeholderEl || !captionEl) return;

  let lastTrigger = null;
  let currentIndex = -1;

  const renderAtIndex = function (index) {
    if (!openers.length) return;
    currentIndex = (index + openers.length) % openers.length;
    const btn = openers[currentIndex];
    const label = btn.dataset.lightboxLabel || "Ranch photo";
    const src = btn.dataset.lightboxSrc || "";
    const alt = btn.dataset.lightboxAlt || label;

    captionEl.textContent = label;

    if (src) {
      imageEl.src = src;
      imageEl.alt = alt;
      imageWrap.hidden = false;
      placeholderEl.hidden = true;
    } else {
      imageEl.removeAttribute("src");
      imageEl.alt = "";
      imageWrap.hidden = true;
      placeholderEl.hidden = false;
      placeholderEl.setAttribute("aria-label", label);
    }
  };

  const close = function () {
    if (!dialog.open) return;
    dialog.close();
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
  };

  openers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      lastTrigger = btn;
      renderAtIndex(openers.indexOf(btn));

      if (!dialog.open) {
        dialog.showModal();
      }
    });
  });

  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", close);
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      close();
    }
  });

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      renderAtIndex(currentIndex - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      renderAtIndex(currentIndex + 1);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      renderAtIndex(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      renderAtIndex(currentIndex + 1);
    }
  });
})();
