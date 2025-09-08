document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const ctaButton = document.getElementById("primaryCta");
  const toast = document.getElementById("toast");
  if (ctaButton && toast) {
    ctaButton.addEventListener("click", () => {
      toast.hidden = false;
      window.setTimeout(() => {
        toast.hidden = true;
      }, 1800);
    });
  }
});

