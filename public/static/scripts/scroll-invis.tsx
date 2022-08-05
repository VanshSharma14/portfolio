const q = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  if (window.scrollY != 0 && q != null) {
    q.classList.add("hideScrolls");
  } else {
    q?.classList.remove("hideScrolls");
  }
  if (window.scrollY == 0 && q != null) {
    q.classList.add("revealScrolls");
  } else {
    q?.classList.remove("revealScrolls");
  }
});
