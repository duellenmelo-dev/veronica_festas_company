import { exploreKits, filterSearchKits, loadKits } from "./modules/kits.js";
import { initWhatsAppButton } from "./modules/ui.js";
import { renderCompanyMap } from "./modules/map.js";
import { calculateRoute } from "./modules/route.js";

const filterButtons = document.querySelectorAll(".filter-button");

const listKits = document.querySelector("#listKits");

const linkKits = document.querySelector("#link-kits");
const sectionExploreKits = document.querySelector("#section-explore-kits");

const linkInit = document.querySelector("#link-init");
const sectionExploreHero = document.querySelector("#section-explore-hero");

const linkAbout = document.querySelector("#link-about");
const sectionExploreAbout = document.querySelector("#section-explore-about");

const linkLocation = document.querySelector("#link-location");
const sectionExploreLocation = document.querySelector(
  "#section-explore-location",
);

const btnExploreKits = document.querySelector("#btn_explore_kits");

const btnCalculateCep = document.querySelector("#btnCalculateCep");

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

linkAbout.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreAbout.scrollIntoView({ behavior: "smooth" });
});

linkLocation.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreLocation.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppButton();
});

btnCalculateCep.addEventListener("click", calculateRoute);

window.addEventListener("DOMContentLoaded", () => {
  renderCompanyMap();
});
