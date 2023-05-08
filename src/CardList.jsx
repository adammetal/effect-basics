// fetch to api and render the results
// Eg. https://api.scryfall.com/cards/search?q=merfolk

import { useEffect, useState } from "react";
import { getCardsByTerm } from "./client/cards";

function CardList(props) {
  const term = props.term; // merfolk
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      const result = await getCardsByTerm(term);
      setCards(result.data);
    };

    if (!term.length) {
      return;
    }

    getCards();
  }, [term]);

  return (
    <div>
      <h2>Card list</h2>
      <pre>{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
}

export default CardList;
