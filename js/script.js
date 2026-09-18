import { exploreKits, filterSearchKits, loadKits } from "./modules/kits.js";
import { initWhatsAppButton } from "./modules/ui.js";

const filterButtons = document.querySelectorAll(".filter-button");

const listKits = document.querySelector("#listKits");

const linkKits = document.querySelector("#link-kits");
const sectionExploreKits = document.querySelector("#section-explore-kits");

const linkInit = document.querySelector("#link-init");
const sectionExploreHero = document.querySelector("#section-explore-hero");

const btnExploreKits = document.querySelector("#btn_explore_kits");

btnExploreKits.addEventListener("click", () => exploreKits(sectionExploreKits));

document.addEventListener("DOMContentLoaded", () => {
  loadKits(listKits);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    filterSearchKits(button, listKits);
  });
});

linkKits.addEventListener("click", (event) => {
  event.preventDefault();
  exploreKits(sectionExploreKits);
});

linkInit.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreHero.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppButton();
});
