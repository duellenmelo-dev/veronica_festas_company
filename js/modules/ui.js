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
