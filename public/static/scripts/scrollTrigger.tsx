const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".para");
    // alert("anything");

    if (entry.isIntersecting) {
      square?.classList.add("fadeRight");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square?.classList.remove("fadeRight");
  });
});
const query = document.querySelectorAll(".scroll-wrapper");
// alert("script runnin");

query?.forEach((el) => {
  observer.observe(el);
});

// alert("Script is running");
