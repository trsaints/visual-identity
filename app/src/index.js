(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };

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

  const observer = new IntersectionObserver(handleRendering, options);

  const presentationTargets = document.querySelectorAll(".list__part");

  document.addEventListener("DOMContentLoaded", () => {
    presentationTargets.forEach((part) => observer.observe(part));
  });
})();
