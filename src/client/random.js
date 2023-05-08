async function getRandomCard() {
  const response = await fetch('https://api.scryfall.com/cards/random');
  const result = await response.json();
  return result;
}

export { getRandomCard };
