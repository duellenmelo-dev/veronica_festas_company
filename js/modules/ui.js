export function initWhatsAppButton() {
  const phone = "5581997645179";
  const defaultMessage = "Olá! Gostaria de mais informações sobre os serviços.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  const whatsappLink = document.getElementById("whatsapp-link");

  if (whatsappLink) {
    whatsappLink.href = whatsappUrl;
  }
}

export function showRouteInfo(route) {
  const distance = route.distance / 1000;
  const time = route.duration / 60;

  document.querySelector("#distance").innerText = distance.toFixed(1) + " km";
  document.querySelector("#time").innerText = Math.round(time) + " min";
}

export function showAddress(addressData) {
  const address = `${addressData.logradouro}, ${addressData.localidade}`;
  document.querySelector("#userAddress").innerText = address;
}
