(() => {
  function handleRendering(entries, _observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        target.classList.add("visible");

        return;
      }

      target.classList.remove("visible");
    });
  }

  function observeSlides() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observer = new IntersectionObserver(handleRendering, options);

    const presentationTargets = document.querySelectorAll(".list__part");

    presentationTargets.forEach((part) => observer.observe(part));
  }

  function indicateCurrentSlide(e) {
    const { target } = e;

    const notSlideLink = target.getAttribute("data-link") === null;

    if (notSlideLink) return;

    navLinks.forEach((link) => link.classList.remove("active"));

    target.classList.add("active");
  }

  function startSlide() {
    const startLink = document.querySelector("[href='#slide-0']");
    const firstLink = document.querySelector("[href='#slide-1']");

    if (firstLink.classList.contains("active")) return;

    firstLink.classList.add("active");

    startLink.classList.remove("active");
  }

  function toggleMenu() {
    const headerNav = document.querySelector(".header__nav");

    if (headerNav.classList.contains("active")) {
      headerNav.classList.remove("active");

      return;
    }

    headerNav.classList.add("active");
  }

  const navLinks = document.querySelectorAll(".header__nav--link");
  const slideStart = document.querySelector('[data-slide="start"]');
  const navToggler = document.querySelector(".header__nav--toggler");

  document.addEventListener("DOMContentLoaded", observeSlides);
  document.addEventListener("click", indicateCurrentSlide);

  navLinks.forEach((navlink) => {
    navlink.addEventListener("click", toggleMenu);
  });

  slideStart.addEventListener("click", startSlide);

  navToggler.addEventListener("click", toggleMenu);
})();
