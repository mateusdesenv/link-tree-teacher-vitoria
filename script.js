const CONFIG = {
  siteUrl: "https://teachervitoria.online",
  whatsappNumber: "5551995070937",
  whatsappMessage: "Olá, Teacher Vitória! Vim pelo link e gostaria de saber mais sobre as aulas de inglês."
};

const siteButton = document.querySelector('[data-link="site"]');
const whatsappButton = document.querySelector('[data-link="whatsapp"]');

siteButton.href = CONFIG.siteUrl;
whatsappButton.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

const buttons = document.querySelectorAll(".link-button");

buttons.forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });
});
