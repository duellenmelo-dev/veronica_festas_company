import { getKits } from "../services/kitsAPI.js";

export function exploreKits(sectionExploreKits) {
  sectionExploreKits.scrollIntoView({
    behavior: "smooth",
  });
}

export async function loadKits(listKits) {
  const data = await getKits();
  let quantity = 0;

  if (window.innerWidth <= 480) {
    quantity = 2;
  } else if (window.innerWidth <= 768) {
    quantity = 4;
  } else {
    quantity = 3;
  }

  const kits = data.slice(0, quantity);
  printKits(kits, listKits);
}

export function printKits(kits, listKits) {
  listKits.innerHTML = "";
  const phone = "5581997645179";

  kits.forEach((kit) => {
    const siteUrl = window.location.origin;
    const productImageUrl = `${window.location.origin}/${kit.image}`;
    const messageText = `${siteUrl}

Olá! Gostaria de obter mais informações sobre este kit:

* Kit: ${kit.titulo}
* Descrição: ${kit.descricao}
* Categoria: ${kit.categoria}
* Foto do kit: ${productImageUrl}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      messageText,
    )}`;

    listKits.innerHTML += `
      <article class="card">
        <img src="${kit.image}" alt="${kit.titulo}" />
        <div class="card_info">
          <h3>${kit.titulo}</h3>
          <span>
            ${kit.descricao}
          </span>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
            <button class="button_card">
              Saiba mais &#8594;
              <img src="assets/whatsapp-brands-solid.png" alt="whatsapp" />
            </button>
          </a>
        </div>
      </article>
    `;
  });
}

export async function printAllKits(listKits) {
  const data = await getKits();
  printKits(data, listKits);
}

export async function filterSearchKits(filterButton, listKits) {
  const filterCategory = filterButton.dataset.filter;
  const data = await getKits();

  if (filterCategory === "todos") {
    return printKits(data, listKits);
  }

  const filterKits = data.filter((kit) => kit.categoria === filterCategory);

  printKits(filterKits, listKits);
}
