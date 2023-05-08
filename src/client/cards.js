async function getCardsByTerm(term) {
  const url = `https://api.scryfall.com/cards/search?q=${term}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export {
  getCardsByTerm
}
