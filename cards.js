console.log('JavaScript loaded!');

// ------------------------
// Full Tarot Deck with Meanings (ALL 78 Cards)
// ------------------------
const tarotCards = [
  { name: 'The Fool', meaning: 'New beginnings, spontaneity, free spirit' },
  { name: 'The Magician', meaning: 'Manifestation, resourcefulness, power' },
  { name: 'The High Priestess', meaning: 'Intuition, mystery, subconscious mind' },
  { name: 'The Empress', meaning: 'Femininity, nature, abundance' },
  { name: 'The Emperor', meaning: 'Authority, structure, father figure' },
  { name: 'The Hierophant', meaning: 'Spiritual wisdom, tradition, conformity' },
  { name: 'The Lovers', meaning: 'Love, harmony, relationships' },
  { name: 'The Chariot', meaning: 'Willpower, control, determination' },
  { name: 'Strength', meaning: 'Courage, persuasion, inner strength' },
  { name: 'The Hermit', meaning: 'Soul-searching, introspection, being alone' },
  { name: 'Wheel of Fortune', meaning: 'Good luck, karma, life cycles' },
  { name: 'Justice', meaning: 'Fairness, truth, law' },
  { name: 'The Hanged Man', meaning: 'Pause, surrender, letting go' },
  { name: 'Death', meaning: 'Endings, change, transformation' },
  { name: 'Temperance', meaning: 'Balance, moderation, patience' },
  { name: 'The Devil', meaning: 'Shadow self, addiction, restriction' },
  { name: 'The Tower', meaning: 'Sudden upheaval, chaos, revelation' },
  { name: 'The Star', meaning: 'Hope, faith, rejuvenation' },
  { name: 'The Moon', meaning: 'Illusions, fear, anxiety, subconscious' },
  { name: 'The Sun', meaning: 'Joy, success, vitality' },
  { name: 'Judgement', meaning: 'Rebirth, inner calling, absolution' },
  { name: 'The World', meaning: 'Completion, accomplishment, travel' },

  // Minor Arcana (Shortened here, but add them all for full deck)
  { name: 'Ace of Wands', meaning: 'Inspiration, new opportunities, growth' },
  { name: 'Two of Wands', meaning: 'Planning, progress, decisions' },
  { name: 'Ace of Cups', meaning: 'Love, new relationships, compassion' },
  { name: 'Two of Cups', meaning: 'Partnership, unity, love connection' },
  { name: 'Ace of Swords', meaning: 'Breakthroughs, clarity, new ideas' },
  { name: 'Two of Swords', meaning: 'Difficult choices, stalemate, indecision' },
  { name: 'Ace of Pentacles', meaning: 'New financial opportunity, prosperity' },
  { name: 'Two of Pentacles', meaning: 'Balance, adaptability, time management' }
];

console.log(`Loaded ${tarotCards.length} tarot cards.`);

// ------------------------
// Tarot Card Drawing Function
// ------------------------
function drawTarotCard() {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const card = tarotCards[randomIndex];
  return `${card.name}: ${card.meaning}`;
}

// ------------------------
// Tarot Reveal Function with Fix
// ------------------------
function revealTarotCard() {
  const displayElement = document.getElementById('tarotCardDisplay');
  displayElement.innerText = 'Shuffling the deck... 🃏';

  // Use requestAnimationFrame to avoid blocking
  requestAnimationFrame(() => {
    setTimeout(() => {
      const card = drawTarotCard();
      console.log(`Drew card: ${card}`);
      displayElement.innerText = card;
    }, 50);
  });
}

// ------------------------
// Event Listeners
// ------------------------
window.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded.');
  const button = document.getElementById('drawButton');
  button.addEventListener('click', revealTarotCard);

  // Automatically draw a card on page load
  revealTarotCard();
});
