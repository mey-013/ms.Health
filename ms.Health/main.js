const selectElement = (elment) => document.querySelector(element);

selectElement(".menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});
