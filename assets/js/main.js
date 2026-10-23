(() => {
  const gallery = document.querySelector('[data-shuffle-gallery]');
  const shuffleButton = document.querySelector('[data-shuffle-button]');

  function shuffleWorks() {
    if (!gallery) return;
    const cards = Array.from(gallery.children);
    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    cards.forEach((card, index) => {
      card.style.animationDelay = `${Math.min(index * 18, 180)}ms`;
      gallery.appendChild(card);
    });
  }

  if (gallery) shuffleWorks();
  if (shuffleButton) shuffleButton.addEventListener('click', shuffleWorks);

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
