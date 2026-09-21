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

const linkContact = document.querySelector("#link-contact");

const linkServices = document.querySelector("#footer_link-services");
const linkFooterInit = document.querySelector("#footer_link-init");
const linkFooterAbout = document.querySelector("#footer_link-about");
const linkFooterLocation = document.querySelector("#footer_link-location");
const linkFooterContact = document.querySelector("#footer_link-contact");

const sectionExploreContact = document.querySelector(
  "#section-explore-contact",
);

const btnExploreKits = document.querySelector("#btn_explore_kits");

const btnCalculateCep = document.querySelector("#btnCalculateCep");

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector(".header_links");

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

linkServices.addEventListener("click", (event) => {
  event.preventDefault();
  exploreKits(sectionExploreKits);
});

linkFooterInit.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreHero.scrollIntoView({ behavior: "smooth" });
});

linkFooterAbout.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreAbout.scrollIntoView({ behavior: "smooth" });
});

linkFooterLocation.addEventListener("click", (event) => {
  event.preventDefault();
  sectionExploreLocation.scrollIntoView({ behavior: "smooth" });
});

linkFooterContact.addEventListener("click", (event) => {
  event.preventDefault();
  exploreKits(sectionExploreContact);
});

linkContact.addEventListener("click", (event) => {
  event.preventDefault();
  exploreKits(sectionExploreContact);
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
